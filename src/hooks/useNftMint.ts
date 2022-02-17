import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { nftMint, getNftContract } from '../sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useNftMint = () => {
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
  const masterChefContract = getNftContract(sushi)

  const handleNftMint = useCallback(
    async (count) => {
      try {
        const txHash = await nftMint(masterChefContract, account, count)
        return txHash.events
      } catch (e) {
        return false
      }
    },
    [account, sushi],
  )

  return { onNftMint: handleNftMint }
}

export default useNftMint
