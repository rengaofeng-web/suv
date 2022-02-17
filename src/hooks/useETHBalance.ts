import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import { getETHBalance } from '../utils/erc20'
import useBlock from './useBlock'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import { injected, walletconnect } from 'src/contexts/Metamask/connectors'

const useETHBalance = () => {
  const [ethBalance, setETHBalance] = useState(new BigNumber(0))
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
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getETHBalance(library?.provider, account)
    setETHBalance(new BigNumber(balance))
  }, [account, library?.provider])

  useEffect(() => {
    if (account && library?.provider) {
      fetchBalance()
    }
  }, [account, library?.provider, setETHBalance, block])

  return ethBalance
}

export default useETHBalance
