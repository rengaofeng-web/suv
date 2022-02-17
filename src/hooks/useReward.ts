import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { harvest, harvestNft, getMasterChefContract } from '../sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useReward = (pid: number, isNft?: boolean) => {
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

  const handleReward = useCallback(async () => {
    if (isNft) {
      const txHash = await harvestNft(masterChefContract, pid, account)
      return txHash
    } else {
      const txHash = await harvest(masterChefContract, pid, account)
      return txHash
    }
  }, [account, pid, sushi, isNft])

  return { onReward: handleReward }
}

export default useReward
