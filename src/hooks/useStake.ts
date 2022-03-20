import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { getContract, createMastContract } from "src/utils/erc20";

import { stake, getMasterChefContract, stakeNft } from '../sushi/utils'
import { BigNumber } from '../sushi'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'
import { provider } from "web3-core";
import useIsIDAI from './useIsiDai'
import useFarm from './useFarm'
const useStake = (
  pid: number,
  isETH: boolean,
  decimals: number,
  isNft?: boolean,
) => {
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
  const { ethereum } = useWallet();

  const farm = useFarm(pid)

  const flag = useIsIDAI(pid - 0)
  let chef: any

  const handleStake = useCallback(
    async (
      amount: string,
      wethMax: BigNumber,
      duration: number | string,
      ethBalance: BigNumber,
    ) => {
      if (flag) {
        chef = createMastContract(farm.lpToken)
      } else {
        chef = getMasterChefContract(sushi)
      }
      if (isNft) {
        try {
          const txHash = await stakeNft(
            getMasterChefContract(sushi),
            pid,
            amount,
            wethMax,
            account,
            isETH,
            decimals,
            duration,
            ethBalance,
          )
          return txHash
        } catch (e) {
          console.log(e)
          return e
        }
      } else {
        try {
          const txHash = await stake(
            // getMasterChefContract(sushi),
            chef,
            pid,
            amount,
            wethMax,
            account,
            isETH,
            decimals,
            duration,
            ethBalance,
          )
          return txHash
        } catch (e) {
          console.log(e)
          return e
        }
      }
    },
    [account, pid, sushi, decimals, isNft, farm.lpToken],
  )

  return { onStake: handleStake }
}

export default useStake
