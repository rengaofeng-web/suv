import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract, unstakeNft } from '../sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useUnstake = (pid: number, decimals: number, isNft?: boolean) => {
  const context = useWeb3React<any>()
  const {
    connector,
    library,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)

  const handleUnstake = useCallback(
    async (amount: string) => {
      try {
        if (isNft) {
          const txHash = await unstakeNft(
            masterChefContract,
            pid,
            decimals,
            amount,
            account,
          )
          return txHash
        } else {
          const txHash = await unstake(
            masterChefContract,
            pid,
            decimals,
            amount,
            account,
          )
          return txHash
        }
      } catch (e) {
        return e
      }
    },
    [account, pid, sushi, decimals],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
