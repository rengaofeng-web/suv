import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import useSushi from './useSushi'
import { useWallet, Wallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { getAllowance } from '../utils/erc20'
import { getMasterChefContract, nftTokenApproved } from '../sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useAllowance = (lpContract: Contract, isNft?: boolean) => {
  const [allowance, setAllowance] = useState<any>(new BigNumber(0))
  const context = useWeb3React<Web3Provider>()
  const {
    connector,
    library: ethereum,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi)

  const fetchAllowance = useCallback(async () => {
    if (isNft) {
      const allowance = await nftTokenApproved(
        lpContract,
        masterChefContract?.options?.address,
        account || '',
      )
      setAllowance(allowance)
    } else {
      const allowance = await getAllowance(
        lpContract,
        masterChefContract,
        account || '',
      )
      setAllowance(new BigNumber(allowance))
    }
  }, [account, masterChefContract, sushi, lpContract])

  useEffect(() => {
    if (account && masterChefContract && lpContract) {
      fetchAllowance()
    }
    const refreshInterval = setInterval(fetchAllowance, 10000)
    return () => clearInterval(refreshInterval)
  }, [account, masterChefContract, sushi, lpContract])

  return allowance
}

export default useAllowance
