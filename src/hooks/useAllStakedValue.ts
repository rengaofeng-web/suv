import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet, Wallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'

import {
  getMasterChefContract,
  getFarms,
  getTotalLPWethValue,
  getHttpTotalLPWethValue,
  getProviderFromSushi,
} from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import axios from 'axios'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'
export interface StakedValue {
  tokenAmount?: BigNumber
  wethAmount?: BigNumber
  totalWethValue?: BigNumber
  tokenPriceInWeth?: BigNumber
  poolWeight?: BigNumber
  lpTokenPrice?: BigNumber
  lpTokenAmount?: BigNumber
  lpTVL?: BigNumber
  earned?: BigNumber
  userTokenAmount?: BigNumber
  myTVL?: BigNumber
}

const useAllStakedValue = () => {
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const context = useWeb3React<Web3Provider>()
  const {
    connector,
    library: ethereum,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefContract = getMasterChefContract(sushi)

  const fetchAllStakedValue = useCallback(async () => {
    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
          baseTokenContract,
          poolType,
          decimals,
          bridge,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          baseTokenContract: Contract
          poolType: number
          decimals: number
          bridge: number
        }) =>
          getTotalLPWethValue(
            sushi,
            lpContract,
            tokenContract,
            baseTokenContract,
            pid,
            poolType,
            decimals,
            account,
            ethereum,
            bridge,
          ),
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, sushi])

  const fetchAllStakedValueHttp = useCallback(async () => {
    const ret = await axios.get('/price.json')
    const price = ret.data

    const balances: Array<StakedValue> = await Promise.all(
      farms.map(
        ({
          pid,
          lpContract,
          tokenContract,
          baseTokenContract,
          poolType,
          decimals,
          bridge,
          nftType,
        }: {
          pid: number
          lpContract: Contract
          tokenContract: Contract
          baseTokenContract: Contract
          poolType: number
          decimals: number
          bridge: number
          nftType: boolean
        }) =>
          getHttpTotalLPWethValue(
            sushi,
            lpContract,
            tokenContract,
            baseTokenContract,
            pid,
            poolType,
            decimals,
            account,
            getProviderFromSushi(sushi),
            bridge,
            price[pid],
            nftType,
          ),
      ),
    )

    setBalance(balances)
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    // if (account && masterChefContract && sushi) {
    //   fetchAllStakedValue()
    // } else
    // console.log(sushi)

    if (masterChefContract?.options?.address && sushi) {
      //fetchAllStakedValue()
      fetchAllStakedValueHttp()
    }
    //}, [account, block, masterChefContract, setBalance, sushi, fetchAllStakedValue])
  }, [account, masterChefContract, setBalance, sushi, fetchAllStakedValueHttp])

  return balances
}

export default useAllStakedValue
