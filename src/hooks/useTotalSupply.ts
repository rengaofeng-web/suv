import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getSushiSupply } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useTotalSupply = (token?: any) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance1 = await getSushiSupply(token)
    if (!new BigNumber(balance1).isEqualTo(balance)) {
      setBalance(new BigNumber(balance1))
    }
  }, [sushi])

  useEffect(() => {
    if (sushi) {
      fetchBalance()
    }
  }, [setBalance, block, sushi])

  return balance
}

export default useTotalSupply
