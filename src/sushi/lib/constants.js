import BigNumber from 'bignumber.js/bignumber'



import SUVLogo from 'src/assets/PC-config/pool/SUV.svg'
import SUV_BUSDLogo from 'src/assets/PC-config/pool/SUV-BUSD1.svg'
import BUSDLogo from 'src/assets/PC-config/pool/BUSD.svg'
import ETHLogo from 'src/assets/PC-config/pool/ETH.svg'
import USDTLogo from 'src/assets/PC-config/pool/USDT.svg'
import BNBLogo from 'src/assets/PC-config/pool/BNB.svg'
import DAILogo from 'src/assets/PC-config/pool/DAI.svg'
import USDCLogo from 'src/assets/PC-config/pool/USDC.svg'
import BTCLogo from 'src/assets/PC-config/pool/BTCB.svg'
import CAKELogo from 'src/assets/PC-config/pool/CAKE.svg'



import HULpLogo from 'src/assets/PC-config/pool/BNB.svg';
import BFLpLogo from 'src/assets/PC-config/pool/BNB.svg'
import UCFLpLogo from 'src/assets/PC-config/pool/BNB.svg';
import FELpLogo from 'src/assets/PC-config/pool/BNB.svg'
import UTFLpLogo from 'src/assets/PC-config/pool/BNB.svg';//
import FBLpLogo from 'src/assets/PC-config/pool/BNB.svg'
import FDLpLogo from 'src/assets/PC-config/pool/BNB.svg'
import FBNBLpLogo from 'src/assets/PC-config/pool/BNB.svg'
import EBLpLogo from 'src/assets/PC-config/pool/BNB.svg'
import FLLpLogo from 'src/assets/PC-config/pool/BNB.svg'

import Nft1Logo from 'src/assets/PC-config/pool/BNB.svg'
import Nft2Logo from 'src/assets/PC-config/pool/BNB.svg'

import Nft3Logo from 'src/assets/PC-config/pool/BNB.svg'

import Nft4Logo from 'src/assets/PC-config/pool/BNB.svg'
import Nft5Logo from 'src/assets/PC-config/pool/BNB.svg'


export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)
const FT_DECIMALS = 18

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
  FT_DECIMALS,
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const supportedChainId = 4002; // bsc test net
// export const supportedChainId = 56; // bsc main net

export const chainExplorerUrls = {
  '56': 'https://bscscan.com/',
  '97': 'https://testnet.bscscan.com/',
  '4002': 'https://testnet.ftmscan.com/',
  '250': 'https://ftmscan.com/',

}

export const chainRPCs = {
  '56': 'https://bsc-dataseed1.binance.org',
  '97': 'https://data-seed-prebsc-1-s2.binance.org:8545/',
  '4002': 'https://xapi.testnet.fantom.network/lachesis',
  '250': 'https://rpc.ftm.tools/',
}

export const chainName = {
  '4002': 'Fantom Testnet',
  '250': 'Fantom Mainnet'
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    3: '0xf0Bad8BDCd8508bA3a253636f7031dE0a4CAaefd',
    250: '0x57E1B84Dc3Fee985Eb05A3e0648588aaFDB23E2C',
    4002: '0x0544d40f38Bc64CFB449bFddBfA96E9A5Fb36AEE',
  },
  sushiPair: {
    1: '', // sushi-baseCoin
    3: '', // sushi-baseCoin
    250: '0xf348F468B525D0F887878e56e0Db27d518c82898', // sushi-baseCoin
    4002: '0xdDA5122129dC6C410db0f82a72C5032d390d683D',
  },
  nft: {
    4002: '0x7904958Ee9AeCfeE3a17748A055ab9f00C4c2732',
    250: '0xe045129484a58281075d8669201B270BD82a4C83',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    3: '0x3552fc1e1FfC28F410387B20aa0DC2775352142A',
    250: '0x5070169d9A2258D24ac43D43FC41f3D87cE2C471',
    4002: '0x86C560F4F14e66fee8727f9313a08345BBb11a25',
  },
  helper: {
    // 4002: '0xEb6612B06170B458C3A0bea4eb8A8a1fa8b07aD4',//old
    4002: '0xA86b71c1E5BC6Bc12BB2Cd0c81E4119bDc1C22bf',
    250: '0x05f14b227c156bfa82534b9d214ee484279bc20b'
  },
  baseCoin: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
    250: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd as base coin
    4002: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
  },
  // blockchain's local coin
  localCoin: {
    1: '', // weth on etherum
    250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // wbnb on bsc
    4002: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    128: '0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f', // heco wht
    256: '0xdde332f80cd7fe9f6b83c5ad571894aee57a012f', // heco testnet wht
  },

  // need for apy, pairs that has no base coin
  bridge1: {
    56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // wbnb
    97: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // wbnb
  },
  bridge1Pair: {
    56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // wbnb-busd
    97: '0x23D42e1B7f8993d7feAf5A22cE4FB25AA37C59fe', // wbnb-busd
  },
  bridge2: {
    56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // eth
    97: '',
  },
  bridge2Pair: {
    56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // eth-busd
    97: '',
  },
  bridge3: {
    97: '',
  },
  bridge3Pair: {
    97: '',
  }
}



export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      4002: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0x57E1B84Dc3Fee985Eb05A3e0648588aaFDB23E2C', // rvs
      4002: '0x0544d40f38Bc64CFB449bFddBfA96E9A5Fb36AEE', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'SUV',
    tokenSymbol: 'SUV',
    multiple: 1,
    ratio: 5,
    fee: '0%',
    icon: SUVLogo,

  },
  {
    pid: 1,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      4002: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // rvs
      4002: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 0,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'SUV-BUSD',
    tokenSymbol: 'SUV-BUSD',
    multiple: 1,
    ratio: 5,
    fee: '0%',
    icon: SUV_BUSDLogo,

  },

  {
    pid: 2,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      4002: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', // rvs
      4002: '0x8AdB9a3A511fc33a57a7E68dBa155b5A37a36a15', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'BUSD',
    tokenSymbol: 'BUSD',
    multiple: 1,
    ratio: 5,
    fee: '0%',
    icon: BUSDLogo,

  },



  {
    pid: 3,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      4002: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0x04068da6c83afcfa0e13ba15a6696662335d5b75', // rvs
      4002: '0x8Dc69C915DD2b74f4C0503A115622611CE6ff9e4', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'ETH',
    tokenSymbol: 'ETH',
    multiple: 1,
    ratio: 5,
    fee: '0%',
    icon: ETHLogo,

  },


  {
    pid: 4,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0x049d68029688eabf473097a2fc38ef61633a3c7a', // rvs
      4002: '0xf1277d1Ed8AD466beddF92ef448A132661956621', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'USDT',
    tokenSymbol: 'USDT',
    multiple: 1,
    ratio: 4,
    fee: '0%',
    icon: USDTLogo,

  },


  {
    pid: 5,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0x321162cd933e2be498cd2267a90534a804051b11', // rvs
      4002: '0xBa106865cCb89733FfA5f28Fe6F6B0DC154ed84e', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'BNB',
    tokenSymbol: 'BNB',
    multiple: 1,
    ratio: 4,
    fee: '0%',
    icon: BNBLogo,

  },


  {
    pid: 6,
    lpAddresses: {
      250: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082', // BTCB-wbnb
      97: '0xbBA654915C7C41857583C44F3ca1a2CD60ca605C', // BTCB-wbnb
    },
    tokenAddresses: {
      250: '0x74b23882a30290451a17c44f4f05243b6b58c76d', // BTCB
      4002: '0x25D9ebC0186dA816EF90D75742FF8e447Dc6c9f2', // BTCB
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x8AdB9a3A511fc33a57a7E68dBa155b5A37a36a15', // BTCB
    },
    bridge: 1,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'DAI',
    tokenSymbol: 'DAI',
    multiple: 1,
    ratio: 2,
    fee: '0%',
    icon: DAILogo,

  },
  {
    pid: 7,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0xd67de0e0a0fd7b15dc8348bb9be742f3c5850454', // rvs
      4002: '0x2410218A3EB7594D40a98B16aF9285E5F3691651', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'USDC',
    tokenSymbol: 'USDC',
    multiple: 1,
    ratio: 4,
    fee: '0%',
    icon: USDCLogo,

  },
  {
    pid: 8,
    lpAddresses: {
      250: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      250: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8', // rvs
      4002: '0x0a1F0475719566AbFb5beedb21A8E102bF5DcfE8', // rvs
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'BTCB',
    tokenSymbol: 'BTCB',
    multiple: 1,
    ratio: 4,
    fee: '0%',
    icon: BTCLogo,

  },
  {
    pid: 9,
    lpAddresses: {
      250: '0x70d8929d04b60af4fb9b58713ebcf18765ade422', // ETH-WBNB, need bridge wbnb-busd
      97: '0x010fAd0E39382c608D8DC0DD34050e3F623b32DE', // ETH-WBNB, need bridge wbnb-busd
    },
    tokenAddresses: {
      250: '0x841fad6eae12c286d1fd18d1d525dffa75c7effe', // ETH
      4002: '0x384E93fFfB6f38958a15b18c54f4baa692cF1991', // ETH
    },
    baseTokenAddresses: {
      250: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // busd
      97: '0x397DF20801d1E7cc7eBbA4ce93e338EE21902BD6', // ETH
    },
    bridge: 1,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'CAKE',
    tokenSymbol: 'CAKE',
    multiple: 1,
    ratio: 2,
    fee: '0%',
    // suoha: 3413000000000000000,
    icon: CAKELogo,

  },



]


