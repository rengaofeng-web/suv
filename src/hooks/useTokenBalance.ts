import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet, Wallet } from 'use-wallet'
import { provider } from 'web3-core'

import { getBalance } from '../utils/erc20'
import useBlock from './useBlock'
import { nftBalance } from 'src/sushi/utils'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useTokenBalance = (
  tokenAddress: string,
  isNft?: boolean,
  nftTokenContract?: any,
) => {
  const [balance, setBalance] = useState(new BigNumber(0))
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

  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    if (isNft) {
      const balance = await nftBalance(nftTokenContract, account)
      setBalance(new BigNumber(balance))
    } else {
      const balance = await getBalance(
        library?.provider,
        tokenAddress,
        account || '',
      )
      setBalance(new BigNumber(balance))
    }
  }, [account, library?.provider, tokenAddress, isNft, nftTokenContract])

  useEffect(() => {
    if (account && library?.provider && tokenAddress) {
      fetchBalance()
    }
  }, [
    account,
    library?.provider,
    setBalance,
    block,
    tokenAddress,
    isNft,
    nftTokenContract,
  ])

  return balance
}

export default useTokenBalance
