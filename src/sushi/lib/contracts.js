import BigNumber from 'bignumber.js/bignumber'
import ERC20Abi from './abi/erc20.json'
import IERC721 from './abi/IERC721.json'
import MasterChefAbi from './abi/masterchef.json'
import NftAbi from './abi/nft.json'
import SushiAbi from './abi/sushi.json'
import UNIV2PairAbi from './abi/uni_v2_lp.json'
import WETHAbi from './abi/weth.json'
import HelperAbi from './abi/helper.json'
import {
  contractAddresses,
  SUBTRACT_GAS_LIMIT,
  supportedPools,
} from './constants.js'
import * as Types from './types.js'

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3
    this.defaultConfirmations = options.defaultConfirmations
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5
    this.confirmationType =
      options.confirmationType || Types.ConfirmationType.Confirmed
    this.defaultGas = options.defaultGas
    this.defaultGasPrice = options.defaultGasPrice

    this.sushi = new this.web3.eth.Contract(SushiAbi)
    this.masterChef = new this.web3.eth.Contract(MasterChefAbi)
    this.nft = new this.web3.eth.Contract(NftAbi)
    this.baseCoin = new this.web3.eth.Contract(WETHAbi)
    this.helper = new this.web3.eth.Contract(HelperAbi)
    if (contractAddresses.bridge1[networkId]) {
      this.bridge1 = new this.web3.eth.Contract(ERC20Abi)
      this.bridge1Pair = new this.web3.eth.Contract(UNIV2PairAbi)
    }
    if (contractAddresses.bridge2[networkId]) {
      this.bridge2 = new this.web3.eth.Contract(ERC20Abi)
      this.bridge2Pair = new this.web3.eth.Contract(UNIV2PairAbi)
    }
    if (contractAddresses.bridge3[networkId]) {
      this.bridge3 = new this.web3.eth.Contract(ERC20Abi)
      this.bridge3Pair = new this.web3.eth.Contract(UNIV2PairAbi)
    }
    this.pools = supportedPools.map((pool) =>
      Object.assign(pool, {
        lpAddress: pool.lpAddresses[networkId],
        tokenAddress: pool.tokenAddresses[networkId],
        baseTokenAddress: pool.baseTokenAddresses[networkId],
        lpContract: new this.web3.eth.Contract(UNIV2PairAbi),
        tokenContract: pool.nftType ? new this.web3.eth.Contract(IERC721) : new this.web3.eth.Contract(ERC20Abi),
        baseTokenContract: new this.web3.eth.Contract(ERC20Abi),
      }),
    )

    this.setProvider(provider, networkId)
    this.setDefaultAccount(this.web3.eth.defaultAccount)
  }

  setProvider(provider, networkId) {
    const setProvider = (contract, address) => {
      try {
        contract.setProvider(provider)
        if (address) contract.options.address = address
        else console.error('Contract address not found in network', networkId)
      } catch {

      }

    }


    setProvider(this.sushi, contractAddresses.sushi[networkId])
    setProvider(this.masterChef, contractAddresses.masterChef[networkId])
    setProvider(this.nft, contractAddresses.nft[networkId])
    setProvider(this.baseCoin, contractAddresses.baseCoin[networkId])
    setProvider(this.helper, contractAddresses.helper[networkId])

    if (contractAddresses.bridge1[networkId]) {
      setProvider(this.bridge1, contractAddresses.bridge1[networkId])
      setProvider(this.bridge1Pair, contractAddresses.bridge1Pair[networkId])
    }
    if (contractAddresses.bridge2[networkId]) {
      setProvider(this.bridge2, contractAddresses.bridge2[networkId])
      setProvider(this.bridge2Pair, contractAddresses.bridge2Pair[networkId])
    }
    if (contractAddresses.bridge3[networkId]) {
      setProvider(this.bridge3, contractAddresses.bridge3[networkId])
      setProvider(this.bridge3Pair, contractAddresses.bridge3Pair[networkId])
    }
    this.pools.forEach(
      ({ lpContract, lpAddress, tokenContract, tokenAddress, baseTokenContract, baseTokenAddress }) => {
        setProvider(lpContract, lpAddress)
        setProvider(tokenContract, tokenAddress)
        setProvider(baseTokenContract, baseTokenAddress)
      },
    )

  }

  setDefaultAccount(account) {
    this.sushi.options.from = account
    this.masterChef.options.from = account
  }

  async callContractFunction(method, options) {
    const {
      confirmations,
      confirmationType,
      autoGasMultiplier,
      ...txOptions
    } = options

    if (!this.blockGasLimit) {
      await this.setGasLimit()
    }

    if (!txOptions.gasPrice && this.defaultGasPrice) {
      txOptions.gasPrice = this.defaultGasPrice
    }

    if (confirmationType === Types.ConfirmationType.Simulate || !options.gas) {
      let gasEstimate
      if (
        this.defaultGas &&
        confirmationType !== Types.ConfirmationType.Simulate
      ) {
        txOptions.gas = this.defaultGas
      } else {
        try {
          console.log('estimating gas')
          gasEstimate = await method.estimateGas(txOptions)
        } catch (error) {
          const data = method.encodeABI()
          const { from, value } = options
          const to = method._parent._address
          error.transactionData = { from, value, data, to }
          throw error
        }

        const multiplier = autoGasMultiplier || this.autoGasMultiplier
        const totalGas = Math.floor(gasEstimate * multiplier)
        txOptions.gas =
          totalGas < this.blockGasLimit ? totalGas : this.blockGasLimit
      }

      if (confirmationType === Types.ConfirmationType.Simulate) {
        let g = txOptions.gas
        return { gasEstimate, g }
      }
    }

    if (txOptions.value) {
      txOptions.value = `${txOptions.value}`
    } else {
      txOptions.value = '0'
    }

    const promi = method.send(txOptions)

    const OUTCOMES = {
      INITIAL: 0,
      RESOLVED: 1,
      REJECTED: 2,
    }

    let hashOutcome = OUTCOMES.INITIAL
    let confirmationOutcome = OUTCOMES.INITIAL

    const t =
      confirmationType !== undefined ? confirmationType : this.confirmationType

    if (!Object.values(Types.ConfirmationType).includes(t)) {
      throw new Error(`Invalid confirmation type: ${t}`)
    }

    let hashPromise
    let confirmationPromise

    if (
      t === Types.ConfirmationType.Hash ||
      t === Types.ConfirmationType.Both
    ) {
      hashPromise = new Promise((resolve, reject) => {
        promi.on('error', (error) => {
          if (hashOutcome === OUTCOMES.INITIAL) {
            hashOutcome = OUTCOMES.REJECTED
            reject(error)
            const anyPromi = promi
            anyPromi.off()
          }
        })

        promi.on('transactionHash', (txHash) => {
          if (hashOutcome === OUTCOMES.INITIAL) {
            hashOutcome = OUTCOMES.RESOLVED
            resolve(txHash)
            if (t !== Types.ConfirmationType.Both) {
              const anyPromi = promi
              anyPromi.off()
            }
          }
        })
      })
    }

    if (
      t === Types.ConfirmationType.Confirmed ||
      t === Types.ConfirmationType.Both
    ) {
      confirmationPromise = new Promise((resolve, reject) => {
        promi.on('error', (error) => {
          if (
            (t === Types.ConfirmationType.Confirmed ||
              hashOutcome === OUTCOMES.RESOLVED) &&
            confirmationOutcome === OUTCOMES.INITIAL
          ) {
            confirmationOutcome = OUTCOMES.REJECTED
            reject(error)
            const anyPromi = promi
            anyPromi.off()
          }
        })

        const desiredConf = confirmations || this.defaultConfirmations
        if (desiredConf) {
          promi.on('confirmation', (confNumber, receipt) => {
            if (confNumber >= desiredConf) {
              if (confirmationOutcome === OUTCOMES.INITIAL) {
                confirmationOutcome = OUTCOMES.RESOLVED
                resolve(receipt)
                const anyPromi = promi
                anyPromi.off()
              }
            }
          })
        } else {
          promi.on('receipt', (receipt) => {
            confirmationOutcome = OUTCOMES.RESOLVED
            resolve(receipt)
            const anyPromi = promi
            anyPromi.off()
          })
        }
      })
    }

    if (t === Types.ConfirmationType.Hash) {
      const transactionHash = await hashPromise
      if (this.notifier) {
        this.notifier.hash(transactionHash)
      }
      return { transactionHash }
    }

    if (t === Types.ConfirmationType.Confirmed) {
      return confirmationPromise
    }

    const transactionHash = await hashPromise
    if (this.notifier) {
      this.notifier.hash(transactionHash)
    }
    return {
      transactionHash,
      confirmation: confirmationPromise,
    }
  }

  async callConstantContractFunction(method, options) {
    const m2 = method
    const { blockNumber, ...txOptions } = options
    return m2.call(txOptions, blockNumber)
  }

  async setGasLimit() {
    const block = await this.web3.eth.getBlock('latest')
    this.blockGasLimit = block.gasLimit - SUBTRACT_GAS_LIMIT
  }
}
