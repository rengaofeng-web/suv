import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
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
  const masterChefContract = getMasterChefContract(sushi)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, sushi])

  useEffect(() => {
    if (account && sushi) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, sushi])

  return balance
}

export default useStakedBalance
