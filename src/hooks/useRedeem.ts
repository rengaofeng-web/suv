import { useCallback } from 'react'
import { useWallet } from 'use-wallet'
import { Contract } from 'web3-eth-contract'
import { redeem } from '../sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useRedeem = (masterChefContract: Contract) => {
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
  const handleRedeem = useCallback(async () => {
    const txHash = await redeem(masterChefContract, account)
    return txHash
  }, [account, masterChefContract])

  return { onRedeem: handleRedeem }
}

export default useRedeem
