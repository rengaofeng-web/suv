import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'
const useEarnings = (pid: number) => {
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
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, sushi])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, sushi])

  return balance
}

export default useEarnings
