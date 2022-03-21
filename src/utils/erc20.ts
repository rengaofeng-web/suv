import Web3 from 'web3'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { AbiItem } from 'web3-utils'
import ERC20ABI from '../constants/abi/ERC20.json'
import masstChefABI from 'src/sushi/lib/abi/masterchef.json'
export const getContract = (provider: provider, address: string) => {
  const web3 = new Web3(provider)
  const contract = new web3.eth.Contract(
    ERC20ABI.abi as unknown as AbiItem,
    address,
  )
  return contract
}
export const createMastContract = (address: string) => {
  const web3 = new Web3(Web3.givenProvider)
  const contract = new web3.eth.Contract(
    masstChefABI as unknown as AbiItem,
    address,
  )
  return contract
}

export const getAllowance = async (
  lpContract: Contract,
  masterChefContract: Contract,
  account: string,
): Promise<string> => {
  try {
    const allowance: string = await lpContract.methods
      .allowance(account, masterChefContract.options.address)
      .call()
    return allowance
  } catch (e) {
    return '0'
  }
}

export const getBalance = async (
  provider: provider,
  tokenAddress: string,
  userAddress: string,
): Promise<string> => {
  const lpContract = getContract(provider, tokenAddress)
  try {
    const balance: string = await lpContract.methods
      .balanceOf(userAddress)
      .call()
    return balance
  } catch (e) {
    console.log(e, '错误')
    return '0'
  }
}

export const getETHBalance = async (
  provider: provider,
  userAddress: string,
): Promise<string> => {
  const web3 = new Web3(provider)
  const balance: string = await web3.eth.getBalance(
    userAddress,
    function (err, result) {
      if (err) {
        console.log(err)
        return '0'
      } else {
        const balance: string = web3.utils.fromWei(result, 'ether')
        return balance
      }
    },
  )
  return balance
}
