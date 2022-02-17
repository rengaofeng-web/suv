import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import Web3 from 'web3'

import { getBalance } from '../utils/erc20'
import useBlock from './useBlock'
import { supportedChainId, chainRPCs } from '../sushi/lib/constants'

const useTokenPrice = (
  pairAddress: string,
  tokenAddress: string,
  baseTokenAddress: string,
) => {
  const [price, setPrice] = useState(new BigNumber(0))
  const rpc = chainRPCs[supportedChainId]
  const provider = new Web3.providers.HttpProvider(rpc)
  const block = useBlock()

  const fetchPrice = useCallback(async () => {
    const balance0 = await getBalance(provider, tokenAddress, pairAddress)
    const balance1 = await getBalance(provider, baseTokenAddress, pairAddress)
    let p = new BigNumber(balance1).isLessThanOrEqualTo(0)
      ? new BigNumber(1.0)
      : new BigNumber(balance1).div(new BigNumber(balance0))

    if (balance0 === '0') {
      setPrice(new BigNumber(0.05))
    } else {
      setPrice(p)
    }
  }, [pairAddress, tokenAddress, baseTokenAddress])

  useEffect(() => {
    fetchPrice()
  }, [setPrice, pairAddress, tokenAddress, baseTokenAddress, block])

  return price
}

export default useTokenPrice
