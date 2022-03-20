import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract, stakeNft } from '../sushi/utils'
import { BigNumber } from '../sushi'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useIsIDAI = (
  pid: number
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
  let flag
  if (pid === 2 || pid === 3 || pid === 4 || pid === 5 || pid === 6 || pid === 12 || pid === 13) {
    flag=true
  } else {
    flag=false
  }
  return flag
}

export default useIsIDAI
