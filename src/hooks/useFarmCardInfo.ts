import { useCallback, useEffect, useState } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import {
  harvest,
  getHelperChefContract,
  getMasterChefContract,
  getMasterChefAddress,
  getFarmInfo,
  getHttpTotalLPWethValue2,
  getFarms,
  getTotalWeight,
} from '../sushi/utils'
import { StakedValue } from './useAllStakedValue'
import axios from 'axios'
import BigNumber from 'bignumber.js'
import useBlock from './useBlock10'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useFarmCardInfo = (pid: number, isNft?: boolean) => {
  const context = useWeb3React<any>()
  const {
    connector,
    library,

    chainId: chainId2,
    account,
    activate: connect,
    deactivate: reset,
    active,
    error,
  } = context
  const sushi = useSushi()
  const farms = getFarms(sushi)
  const masterChefAddress = getMasterChefAddress(sushi)
  const masterChefContract = getMasterChefContract(sushi)
  const helperContract = getHelperChefContract(sushi)
  const [balances, setBalance] = useState([] as Array<StakedValue>)
  const block = useBlock()

  const getInfos = useCallback(async () => {
    let farmInfo1 = await getFarmInfo(
      helperContract,
      masterChefAddress,
      [pid],
      account || '0x61a6e964fe93DA08745F46A95Fe13BAc2a0f2289',
    )
    // console.log(farmInfo1)
    // setFarmInfo(farmInfo1)
    return farmInfo1
  }, [account, pid, sushi, masterChefAddress])

  const fetchAllStakedValueHttp = useCallback(async () => {
    // const farmInfo = await
    //balance
    //allowance
    //decimals
    //pending0
    //pending1
  }, [account, sushi, helperContract, masterChefContract])

  useEffect(() => {
    if (helperContract?.options?.address && sushi) {
      fetchAllStakedValueHttp()
    }
  }, [account, helperContract, setBalance, sushi, masterChefContract, block])

  return balances
}

export default useFarmCardInfo
