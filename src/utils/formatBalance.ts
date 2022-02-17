import BigNumber from 'bignumber.js'

export const getBalanceNumber = (
  balance: BigNumber,
  decimals = 18,
  precision = 3,
) => {
  const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toFormat(precision)
}

export const getDisplayBalance = (
  balance: BigNumber,
  decimals = 18,
  fixed = 3,
) => {
  if (!balance) {
    return '0'
  }
  const displayBalance = balance.dividedBy(new BigNumber(10).pow(decimals))
  if (displayBalance.lt(1) && displayBalance.gt(0.001)) {
    return displayBalance.toFixed(fixed, 1)
  }

  return (
    displayBalance
      .toFixed(fixed)
      .split('.')[0]
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
    '.' +
    displayBalance.toFixed(fixed).split('.')[1]
  )
  // +
  // displayBalance.minus(displayBalance.toFixed(0)).toFixed(fixed)
}

export const getFullDisplayBalance = (
  balance: BigNumber,
  decimals = 18,
  showDecimals = 18,
) => {
  return balance.dividedBy(new BigNumber(10).pow(decimals)).toString()
  // .toFixed(showDecimals, 1)
}
