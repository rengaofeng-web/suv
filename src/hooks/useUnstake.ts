import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract, unstakeNft } from '../sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'
import { provider } from "web3-core";
import useIsIDAI from './useIsiDai'
import useFarm from './useFarm'
import { getContract, createMastContract } from "src/utils/erc20";
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
  const { ethereum } = useWallet();

  const farm = useFarm(pid)

  const flag = useIsIDAI(pid - 0)
  let chef: any
  // console.log(farm.lpToken)
  const handleUnstake = useCallback(
    async (amount: string) => {
      if (flag) {
        chef = createMastContract(farm.lpToken)
      } else {
        chef = masterChefContract
      }
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
            // masterChefContract,
            chef,
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
    [account, pid, sushi, decimals, farm.lpToken],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
