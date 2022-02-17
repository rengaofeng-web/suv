import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import { Contracts } from './lib/contracts.js'
import { Account } from './lib/accounts.js'
import { EVM } from './lib/evm.js'

import { contractAddresses } from './lib/constants'

export class Sushi {
  constructor(provider, networkId, testing, options) {
    var realProvider

    if (typeof provider === 'string') {
      // 使用指定的服务提供器（例如在Mist中）或实例化一个新的websocket提供器
      if (provider.includes('wss')) {
        realProvider = new Web3.providers.WebsocketProvider(
          provider,
          options.ethereumNodeTimeout || 10000,
        )
      } else {
        realProvider = new Web3.providers.HttpProvider(
          provider,
          options.ethereumNodeTimeout || 10000,
        )
      }
    } else {
      realProvider = provider
    }

    this.web3 = new Web3(realProvider)

    if (testing) {
      this.testing = new EVM(realProvider)
      this.snapshot = this.testing.snapshot()
    }

    if (options.defaultAccount) {
      this.web3.eth.defaultAccount = options.defaultAccount
    }
    this.contracts = new Contracts(realProvider, networkId, this.web3, options)
    this.sushiAddress = contractAddresses.sushi[networkId]
    this.masterChefAddress = contractAddresses.masterChef[networkId]
    this.baseCoinAddress = contractAddresses.baseCoin[networkId]
    this.localCoinAddress = contractAddresses.localCoin[networkId]
    this.nft = contractAddresses.nft[networkId]
    this.helper = contractAddresses.helper[networkId]
  }

  async resetEVM() {
    this.testing.resetEVM(this.snapshot)
  }
  addAccount(address, number) {
    this.accounts.push(new Account(this.contracts, address, number))
  }

  setProvider(provider, networkId) {
    this.web3.setProvider(provider)
    this.contracts.setProvider(provider, networkId)
    this.operation.setNetworkId(networkId)
  }

  setDefaultAccount(account) {
    this.web3.eth.defaultAccount = account
    this.contracts.setDefaultAccount(account)
  }

  getDefaultAccount() {
    return this.web3.eth.defaultAccount
  }

  loadAccount(account) {
    const newAccount = this.web3.eth.accounts.wallet.add(account.privateKey)

    if (
      !newAccount ||
      (account.address &&
        account.address.toLowerCase() !== newAccount.address.toLowerCase())
    ) {
      throw new Error(`Loaded account address mismatch.
        Expected ${account.address}, got ${newAccount ? newAccount.address : null
        }`)
    }
  }

  toBigN(a) {
    return BigNumber(a)
  }
}
