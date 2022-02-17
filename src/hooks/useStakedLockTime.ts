import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import Web3 from 'web3'

import { getLockTime, getMasterChefContract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useStakedLockTime = (pid: number) => {
  const [lockTime, setLockTime] = useState(0)
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

  const fetchLockTime = useCallback(async () => {
    const web3 = new Web3(library?.provider)
    const lastBlock = await web3.eth.getBlock(web3.eth.defaultBlock)
    const time = await getLockTime(masterChefContract, pid, account)
    const delta =
      Number(time) - Number(lastBlock.timestamp) < 0
        ? 0
        : Number(time) - Number(lastBlock.timestamp)
    setLockTime(delta)
  }, [account, pid, sushi, library?.provider])

  useEffect(() => {
    if (account && sushi) {
      fetchLockTime()
    }
  }, [account, pid, setLockTime, block, sushi])

  return lockTime
}

export default useStakedLockTime
