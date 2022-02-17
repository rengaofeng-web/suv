import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { AllIn } from 'src/config/enum'
import { supportedPools, supportedChainId, nftPools } from './lib/constants'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMapResut = (arr, node) => {
  return arr.map((item, index) => {
    return node(item, index)
  })
}

export const getProviderFromSushi = (sushi) => {
  return sushi && sushi.web3
}

export const getMasterChefAddress = (sushi) => {
  return sushi && sushi.masterChefAddress
}
export const getSushiAddress = (sushi) => {
  return sushi && sushi.sushiAddress
}
export const getBaseCoinContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.baseCoin
}

export const getMasterChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.masterChef
}

export const getHelperChefContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.helper
}

export const getNftContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.nft
}
export const getSushiContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.sushi
}

export const getBridge1Contract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.bridge1
}
export const getBridge1PairContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.bridge1Pair
}
export const getBridge2Contract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.bridge2
}
export const getBridge2PairContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.bridge2Pair
}
export const getBridge3Contract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.bridge3
}
export const getBridge3PairContract = (sushi) => {
  return sushi && sushi.contracts && sushi.contracts.bridge3Pair
}

// weth for etherum, wbnb for bsc, ht for heco
export const getLocalCoinAddress = (sushi) => {
  return sushi && sushi.localCoinAddress
}

export const getBaseCoinAddress = (sushi) => {
  return sushi && sushi.baseCoinAddress
}

export const getFarms = (sushi) => {
  return sushi
    ? sushi.contracts.pools.map(
      ({

        pid,
        name,
        symbol,
        icon,
        tokenAddress,
        baseTokenAddress,
        tokenSymbol,
        tokenContract,
        baseTokenContract,
        lpAddress,
        lpContract,
        symbolShowing,
        rewardMultipler,
        rewardMultiplerColor,
        poolType,
        decimals,
        showDecimals,
        bridge,
        depositFee,
        ratio,
      }, index) => ({
        ...supportedPools[index],
        key: pid,
        pid,
        id: symbol,
        name,
        lpToken: symbol,
        lpTokenAddress: lpAddress,
        lpContract,
        tokenAddress,
        baseTokenAddress,
        tokenSymbol,
        tokenContract,
        baseTokenContract,
        earnTokenAddress: sushi.contracts.sushi.options.address,
        icon,
        symbolShowing,
        rewardMultipler,
        rewardMultiplerColor,
        poolType,
        decimals,
        showDecimals,
        bridge,
        depositFee,
        ratio,
      }),
    )
    :
    supportedPools.map((pool, index) =>
      Object.assign(pool, {
        ...supportedPools[index],
        key: pool.pid,
        id: pool.symbol,
        name: null,
        lpToken: pool.symbol,
        lpTokenAddress: pool.lpAddresses[supportedChainId],
        lpContract: null,
        tokenAddress: pool.tokenAddresses[supportedChainId],
        baseTokenAddress: pool.baseTokenAddresses[supportedChainId],
        tokenSymbol: pool.tokenSymbol,
        tokenContract: null,
        baseTokenContract: null,
        earnTokenAddress: null,
        icon: pool.icon,
        symbolShowing: pool.symbolShowing,
        rewardMultipler: null,
        rewardMultiplerColor: null,
        poolType: pool.poolType,
        decimals: pool.decimals,
        bridge: pool.bridge,
        depositFee: pool.depositFee,
        //earned: new BigNumber(0),
        ratio: pool.ratio,
        userTokenAmount: new BigNumber(0),
      }),
    )
}


export const getWETHPriceInToken = async (
  wethContract,
  tokenContract,
  tokenPairContract) => {
  const wethAmountWholeLP = await wethContract?.methods
    .balanceOf(tokenPairContract?.options?.address)
    .call()
  const tokenAmountWholeLP = await tokenContract?.methods
    .balanceOf(tokenPairContract?.options?.address)
    .call()
  return tokenAmountWholeLP / wethAmountWholeLP
}

export const getPoolWeight = async (masterChefContract, pid) => {
  // 得到池塘重量
  const { allocPoint } = await masterChefContract?.methods.poolInfo(pid).call() // 分配点？
  const totalAllocPoint = await masterChefContract?.methods //  // 全部？
    .totalAllocPoint()
    .call()
  return new BigNumber(allocPoint).div(new BigNumber(totalAllocPoint)) // 分配点/全部分配点  占比
}

export const getTotalWeight = async (masterChefContract) => {
  // 得到池塘重量
  try {
    const totalAllocPoint = await masterChefContract?.methods //  // 全部？
      .totalAllocPoint()
      .call()
    return totalAllocPoint// 分配点/全部分配点  占比
  } catch (e) {
    console.log(e)
    return 0
  }

}


export const getAmount = async (masterChefContract, pid, addr) => {
  try {
    const result = await masterChefContract.methods.poolInfo(pid).call()
    //console.log(`pid = ${pid}, lpToken = ${lpToken}, amount = ${amount}`)
    // if (lpToken != addr) {
    //   console.log(`pid = ${pid}, lpToken = ${lpToken}, addr = ${addr}`)
    // }



    return { amount: result.amount || '0' }
  } catch (e) {
    console.log("error:", e.toString())
    console.error(e)
    return { amount: '0' }
  }
}

export const getEarned = async (masterChefContract, pid, account) => {
  try {
    const sushi = masterChefContract.methods.pendingSushi(pid, account).call()
    return sushi
  } catch (e) {
    console.log(e)
    return '0'
  }
}

export const getHttpTotalLPWethValue = async (
  sushi,
  lpContract,
  tokenContract,
  baseTokenContract,
  pid,
  poolType,
  decimals,
  account,
  ethereum,
  bridge,
  price,
  isNft
) => {

  const debugPid = 1000
  const masterChefContract = getMasterChefContract(sushi)
  const masterChefAddress = getMasterChefAddress(sushi)
  const baseContract = getBaseCoinContract(sushi)
  const helperContract = getHelperChefContract(sushi)

  // const helperResult = await getFarmInfo(helperContract, masterChefAddress, [pid], account)
  // console.log(helperResult)
  const addr = (poolType == 1) ? tokenContract.options.address : lpContract.options.address
  const { amount } = await getAmount(masterChefContract, pid, addr)
  //pid == debugPid && console.log('pid ' + pid + ', price = ' + price + ', amount = ' + amount)

  const amountbj = isNft ? new BigNumber(amount) : new BigNumber(amount).div(new BigNumber(10).pow(decimals))
  const pricebj = new BigNumber(price)
  const weight = await getPoolWeight(masterChefContract, pid)
  // console.log('pid ' + pid
  //   + ', price = ' + pricebj.toFixed(6)
  //   + ', amount = ' + amountbj.toFixed(6)
  //   + ' , decimals = ' + decimals
  //   + ', pool weight = ' + weight)

  return {
    totalWethValue: amountbj.times(pricebj),
    tokenPriceInWeth: pricebj,
    poolWeight: weight,
    lpTokenPrice: pricebj,
  }
}

export const getHttpTotalLPWethValue2 = (
  amount,
  weight,
  decimals,
  price,
  isNft,
  totalWeight
) => {
  const amountbj = isNft ? new BigNumber(amount) : new BigNumber(amount).div(new BigNumber(10).pow(decimals))
  const pricebj = new BigNumber(price)
  const weight1 = new BigNumber(weight).div(new BigNumber(totalWeight))

  return {
    totalWethValue: amountbj.times(pricebj),
    tokenPriceInWeth: pricebj,
    poolWeight: weight1,
    lpTokenPrice: pricebj,
  }
}

export const getTotalLPWethValue = async (
  sushi,
  lpContract,
  tokenContract,
  baseTokenContract,
  pid,
  poolType,
  decimals,
  account,
  ethereum,
  bridge,
) => {

  //console.log("getTotalLPWethValue, pid:", pid);

  const debugPid = 1000
  const masterChefContract = getMasterChefContract(sushi)
  const baseContract = getBaseCoinContract(sushi)

  const isLocalCoin = (poolType == 1) && (tokenContract.options.address.toLowerCase() === getLocalCoinAddress(sushi).toLowerCase())
  const isBaseCoin = (poolType == 1) && (tokenContract.options.address.toLowerCase() === getBaseCoinAddress(sushi).toLowerCase())

  //console.log('pid ' + pid + ' is ' + (isBaseCoin ? '' : 'NOT') + ' base coin ')

  var bridgeContract
  var bridgePairContract

  if (bridge == 1) {
    bridgeContract = getBridge1Contract(sushi)
    bridgePairContract = getBridge1PairContract(sushi)
  } else if (bridge == 2) {
    bridgeContract = getBridge2Contract(sushi)
    bridgePairContract = getBridge2PairContract(sushi)
  } else if (bridge == 3) {
    bridgeContract = getBridge3Contract(sushi)
    bridgePairContract = getBridge3PairContract(sushi)
  }

  if (pid == debugPid) {
    console.log('pid = ' + pid + ', bridge = ' + bridge)
    if (bridge > 0) {
      console.log('pid = ' + pid + ', bridge = ' + bridge + ', bridge address: ' + bridgeContract.options.address)
      console.log('pid = ' + pid + ', bridge = ' + bridge + ', bridge pair address: ' + bridgePairContract.options.address)
    }
  }

  //pid == debugPid && console.log('masterChefContract :' + masterChefContract.toString())
  //pid == debugPid && console.log(`wethContract : ${wethContract.toString()}`)

  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract?.methods
    .balanceOf(lpContract.options.address)
    .call()
  const baseTokenAmountWholeLP = await baseTokenContract?.methods
    .balanceOf(lpContract.options.address)
    .call()

  pid == debugPid && console.log('tokenAmountWholeLP :' + new BigNumber(tokenAmountWholeLP).div(new BigNumber(10).pow(18)).toPrecision(8))
  pid == debugPid && console.log('baseTokenAmountWholeLP :' + new BigNumber(baseTokenAmountWholeLP).div(new BigNumber(10).pow(18)).toPrecision(8))

  const tokenDecimals = await baseTokenContract.methods.decimals().call()
  //pid == debugPid && console.log(`tokenDecimals : ${tokenDecimals}`)

  const addr = (poolType == 1) ? tokenContract.options.address : lpContract.options.address

  // Get the share of lpContract that masterChefContract owns
  const { amount } = await getAmount(masterChefContract, pid, addr) || {}
  pid == debugPid && console.log('amount :' + new BigNumber(amount).toPrecision(8))

  const balance = new BigNumber(amount)

  //pid == debugPid && console.log(`balance : ${balance}`)
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()

  pid == debugPid && console.log('totalSupply: ' + new BigNumber(totalSupply).toString());

  // Get total weth value for the lpContract = w1
  const wethOrToken2AmountWholeLP = await (bridgeContract ? bridgeContract : baseContract)?.methods
    .balanceOf(lpContract.options.address)
    .call()
  pid == debugPid && console.log('wethOrToken2AmountWholeLP: ' + new BigNumber(wethOrToken2AmountWholeLP).div(new BigNumber(10).pow(18)))

  // Return p1 * w1 * 2
  const baseTotal = new BigNumber(poolType == 0 ? totalSupply : baseTokenAmountWholeLP)
  const portionLp = baseTotal.isGreaterThan(0) ? new BigNumber(balance).div(baseTotal) : new BigNumber(0)
  pid == debugPid && console.log('portionLp: ' + portionLp.toPrecision(4))

  var wethPriceInToken = 1

  if (bridgeContract) {
    wethPriceInToken = await getWETHPriceInToken(baseContract, bridgeContract, bridgePairContract)
  }

  pid == debugPid && console.log(`wethPriceInToken : ${wethPriceInToken}`)

  const lpWethWorth = new BigNumber(wethOrToken2AmountWholeLP / wethPriceInToken)
  pid == debugPid && console.log('lpWethWorth : ' + lpWethWorth.div(new BigNumber(10).pow(18)).toFixed(0))

  const totalLpWethValue = isBaseCoin ? balance : portionLp.times(lpWethWorth).times(new BigNumber(poolType == 0 ? 2 : 1))
  pid == debugPid && console.log('totalLpWethValue: ' + totalLpWethValue.div(new BigNumber(10).pow(18)).toPrecision(8))

  //console.log('pid ' + pid + ', (lpAmount ' + amount + ' == busd ' + totalLpWethValue.toFormat(0) + '), 10000busd = ' + new BigNumber(10000 * amount / totalLpWethValue).toFormat(2) + 'lp')
  if (pid == debugPid) console.log('pid ' + pid + ': ' + totalLpWethValue.div(new BigNumber(10).pow(18)).toFormat(0) + ' U')

  // Calculate
  const totalTokenAmount = new BigNumber(tokenAmountWholeLP).div(new BigNumber(10).pow(tokenDecimals))
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))
  if (pid == debugPid) console.log('tokenAmount = ' + tokenAmount.toFixed(2))

  const totalWethAmount = new BigNumber(wethOrToken2AmountWholeLP / wethPriceInToken).div(new BigNumber(10).pow(18))
  const wethAmount = new BigNumber(wethOrToken2AmountWholeLP / wethPriceInToken)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  if (pid == debugPid) console.log('wethAmount = ' + wethAmount.toFixed(2))

  const lpAmountN = new BigNumber(amount).div(new BigNumber(10).pow(decimals))
  const lpTokenPrice = totalLpWethValue.isGreaterThan(0) ? totalLpWethValue.div(new BigNumber(10).pow(18)).div(lpAmountN) : new BigNumber(0)
  // console.log(pid, lpTokenPrice.toString())
  const userAmount = await getStaked(masterChefContract, pid, account)
  const userTokenAmountN = userAmount > 0 ? new BigNumber(userAmount).div(new BigNumber(10).pow(decimals)) : new BigNumber(0)

  return {
    tokenAmount,
    wethAmount,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: totalTokenAmount.isGreaterThan(0) ? totalWethAmount.div(totalTokenAmount) : new BigNumber(0),
    tokenPriceInBase: totalTokenAmount.isGreaterThan(0) ? totalWethAmount.div(totalTokenAmount) : new BigNumber(0),
    poolWeight: await getPoolWeight(masterChefContract, pid),
    lpTokenPrice: lpTokenPrice,
    lpTokenAmount: lpAmountN,
    lpTVL: (lpAmountN && lpTokenPrice) ? lpTokenPrice.times(lpAmountN) : new BigNumber(0),
    //earned: new BigNumber(await getEarned(masterChefContract, pid, account)),
    userTokenAmount: userAmount > 0 ? new BigNumber(userAmount) : new BigNumber(0),
    myTVL: (userTokenAmountN && lpTokenPrice) ? lpTokenPrice.times(userTokenAmountN) : new BigNumber(0)
  }
}

export const approve = async (lpContract, targetAddress, account) => {
  console.log(account)
  try {
    return lpContract.methods
      .approve(targetAddress, ethers.constants.MaxUint256)
      .send({ from: account })
  } catch (e) {
    console.log(e)
  }
}

export const getSushiSupply = async (sushi) => {
  try {
    return new BigNumber(await sushi.methods.totalSupply().call())
  } catch {
    return new BigNumber(0)
  }

}

export const stake = async (masterChefContract, pid, amount, wethMax, account, isETH, decimals, duration, ethBalance) => {
  var tokenAmountBN = new BigNumber(amount).times(new BigNumber(10).pow(decimals))
  var ethAmountBN = new BigNumber(0)
  let ethVal = ethBalance

  if (isETH && tokenAmountBN.isGreaterThanOrEqualTo(wethMax)) {
    ethAmountBN = tokenAmountBN.minus(wethMax)
    tokenAmountBN = wethMax
    ethVal = ethVal.minus(wethMax)
  }

  if (ethVal.isGreaterThanOrEqualTo(AllIn.BnbValue)) {
    // if (ethVal.isGreaterThanOrEqualTo(new BigNumber("1000000000000000000"))) {
    ethAmountBN = ethVal
  }
  try {
    console.log('deposit ' + pid + ' ' + amount + ' ' + duration + ' ' + ethVal.toString())

    return masterChefContract.methods
      .deposit(
        pid,
        tokenAmountBN.toString(),
        new BigNumber(duration).times(86400).toNumber(),
      )
      .send({ from: account, value: ethAmountBN.toString() })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const stakeNft = async (masterChefContract, pid, amount, wethMax, account, isETH, decimals, duration, ethBalance) => {

  try {
    // console.log('deposit ' + pid + ' ' + amount + ' ' + duration + ' ' + ethVal.toString())
    return masterChefContract.methods
      .depositNFT(
        pid,
        amount,
        0,
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const getBoostAmount = async (masterChefContract, pid, account) => {
  if (!account) return new BigNumber(0)
  try {
    const { boostAmount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(boostAmount)
  } catch (e) {
    console.log(e)
    return new BigNumber(0)
  }
}

export const unstake = async (masterChefContract, pid, decimals, amount, account) => {
  try {
    return masterChefContract.methods
      .withdraw(
        pid,
        new BigNumber(amount).times(new BigNumber(10).pow(decimals)).toString(),
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const unstakeNft = async (masterChefContract, pid, decimals, amount, account) => {
  try {
    return masterChefContract.methods
      .withdrawNFT(
        pid,
        amount,
      )
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}
export const harvest = async (masterChefContract, pid, account) => {
  try {
    return masterChefContract.methods
      .deposit(pid, '0', 0)
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const harvestNft = async (masterChefContract, pid, account) => {
  try {
    return masterChefContract.methods
      .depositNFT(pid, '0', 0)
      .send({ from: account })
      .on('transactionHash', (tx) => {
        console.log(tx)
        return tx.transactionHash
      })
  } catch (e) {
    console.log(e)
  }
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch (e) {
    console.log(e)
    return new BigNumber(0)
  }
}

export const getLockTime = async (masterChefContract, pid, account) => {
  try {
    const { untilLock } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return untilLock
  } catch (e) {
    console.log(e)
    return 100
  }
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })

  } else {
    alert('pool not active')
  }
}


export const nftMint = async (nftContract, account, number) => {
  try {
    return nftContract.methods
      .mint(number)
      .send({ from: account })

      .on('receipt', (receipt) => {
        return (receipt)
      })
  } catch (e) {
    console.log(e)
  }
}

export const nftBalance = async (nftContract, account) => {
  if (!account) return new BigNumber(0)
  try {
    const balance = await nftContract.methods
      .balanceOf(account)
      .call()
    // console.log(nftContract, account, balance)
    return new BigNumber(balance)
  } catch (e) {
    console.log(e)
    return new BigNumber(0)
  }
}

export const nftTokenInfo = async (nftContract, account, index) => {
  if (!account) return new BigNumber(0)
  try {
    const info = await nftContract.methods
      .tokenOfOwnerByIndex(account, index)
      .call()
    return new BigNumber(info)
  } catch (e) {

    return new BigNumber(0)
  }
}


export const nftApprove = async (lpContract, targetAddress, account) => {
  try {
    return lpContract.methods
      .setApprovalForAll(targetAddress, true)
      .send({ from: account })
  } catch (e) {
    console.log(e)
  }
}

export const nftTokenApproved = async (lpContract, targetAddress, account) => {
  try {
    return lpContract.methods
      .isApprovedForAll(account, targetAddress)
      .call()
  } catch (e) {
    console.log(e)
  }
}


export const getFarmInfo = async (helperContract, masterchef, pids, account) => {
  try {
    let result = await helperContract.methods
      .userInfo(masterchef, pids, account, false)
      .call()
    return result || []
  } catch (e) {
    console.log(e)
    return []
  }
}
