import BigNumber from 'bignumber.js/bignumber'

import Nft1Logo from 'src/assets/PC-config/NFT/feichuan1.png'
import Nft2Logo from 'src/assets/PC-config/NFT/feichuan2.png'
import Nft3Logo from 'src/assets/PC-config/NFT/feichuan3.png'
import Nft4Logo from 'src/assets/PC-config/NFT/feichuan4.png'
import Nft5Logo from 'src/assets/PC-config/NFT/feichuan5.png'

import SUVLogo from 'src/assets/PC-config/pool/SUV.svg'
import JOELogo from 'src/assets/PC-config/pool/JOE.svg'
import DAILogo from 'src/assets/PC-config/pool/DAI.svg'
import USDCLogo from 'src/assets/PC-config/pool/USDC.svg'
import WAVAXLogo from 'src/assets/PC-config/pool/WAVAX.svg'
import USDTLogo from 'src/assets/PC-config/pool/USDT.svg'
import WBTCLogo from 'src/assets/PC-config/pool/WBTC.svg'
import WETHLogo from 'src/assets/PC-config/pool/WETH.svg'
import SUVAVAXLogo from 'src/assets/PC-config/pool/SUV-AVAX.svg'
import SUVUSDCLogo from 'src/assets/PC-config/pool/SUV-USDC.svg'

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

export const supportedChainId = 43113 // bsc test net
// export const supportedChainId = 43114; // bsc main net
export const chainExplorerUrls = {
  '56': 'https://bscscan.com/',
  '97': 'https://testnet.bscscan.com/',
  '43113': 'https://testnet.snowtrace.com/',
  '43114': 'https://snowtrace.com/',
}

export const chainRPCs = {
  '56': 'https://bsc-dataseed1.binance.org',
  '97': 'https://data-seed-prebsc-2-s2.binance.org:8545',
  '43113': 'https://api.avax-test.network/ext/bc/C/rpc',
  '43114': 'https://api.avax.network/ext/bc/C/rpc',
}

export const chainName = {
  '43113': 'AVAX Testnet',
  '43114': 'AVAX Mainnet',
}

export const contractAddresses = {
  sushi: {
    1: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    3: '0xf0Bad8BDCd8508bA3a253636f7031dE0a4CAaefd',
    43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223',
    43113: '0xd30E6004949eb5bD395BB0bb167cEd0Eb3975319',
    97: '0x5790c7c1211D62b6087b6585c527791944521270',
  },
  sushiPair: {
    1: '', // sushi-baseCoin
    3: '', // sushi-baseCoin
    43114: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // sushi-baseCoin
    43113: '0xdDA5122129dC6C410db0f82a72C5032d390d683D',
  },
  nft: {
    43113: '0xD1a16EFF0EFFF97C814A3703f94580840310132E',
    43114: '0xa8D6b53770AC5CbaAD392d5377D4aec03C51aa54',
    97: '0x5790c7c1211D62b6087b6585c527791944521270',
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    3: '0x3552fc1e1FfC28F410387B20aa0DC2775352142A',
    43114: '0x25F7eC164719FBE9Eece3F2DE42b5E770434b36C',
    43113: '0x4Ea828c72fb4A8862165E96455f7035840f78Cf6',
    97: '0x714B8229a1A60D264E5CdF1ACeC3A3f39020A2f2',
  },
  helper: {
    43113: '0xCf66774661015dAbCFF5c3D0aA6515f4Cd8F5cD1',
    43114: '0xEb6612B06170B458C3A0bea4eb8A8a1fa8b07aD4',
  },
  baseCoin: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
    43114: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd as base coin
    43113: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
  },
  // blockchain's local coin
  localCoin: {
    1: '', // weth on etherum
    43114: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // wbnb on bsc
    43113: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
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
  },
}

export const supportedPools = [
  //token
  {
    pid: 0,
    lpAddresses: {
      43114: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      43113: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0xd30E6004949eb5bD395BB0bb167cEd0Eb3975319', // rvs
    },
    baseTokenAddresses: {
      43114: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'SUV',
    tokenSymbol: 'SUV',
    icon: SUVLogo,
    ratio: 5,
    fee: '0%',
  },

  {
    pid: 1,
    lpAddresses: {
      43114: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      43113: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x15E1702EFa5b06820C5294E38F5051B531B6f5aD', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 0,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'JOE',
    tokenSymbol: 'JOE',
    icon: JOELogo,
    ratio: 5,
    fee: '0%',
  },
  {
    pid: 2,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      43113: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x5Dddfcc9F7ce7fAaEE529c1B3b88c812F4E3Dfb0', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 6,
    showDecimals: 6,
    symbolShowing: 'DAI',
    tokenSymbol: 'DAI',
    icon: DAILogo,
    ratio: 5,
    fee: '0%',
  },

  {
    pid: 3,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      43113: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'USDC',
    tokenSymbol: 'USDC',
    icon: USDCLogo,
    ratio: 5,
    fee: '0%',
  },

  {
    pid: 4,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      43113: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x8e93c8E63e054729dAa5D56b3f9Da262a834016F', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 6,
    showDecimals: 6,
    symbolShowing: 'WAVAX',
    tokenSymbol: 'WAVAX',
    icon: WAVAXLogo,
    ratio: 5,
    fee: '0%',
  },

  {
    pid: 5,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x8653C7A7e490Cfc09d12bC6f46775D085CeAcBb9', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'USDT',
    tokenSymbol: 'USDT',
    icon: USDTLogo,
    ratio: 5,
    fee: '0%',
  },

  {
    pid: 6,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x25d9ebc0186da816ef90d75742ff8e447dc6c9f2', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'WBTC',
    tokenSymbol: 'WBTC',
    icon: WBTCLogo,
    ratio: 5,
    fee: '0%',
  },
  {
    pid: 13,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x25d9ebc0186da816ef90d75742ff8e447dc6c9f2', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'WETH',
    tokenSymbol: 'WETH',
    icon: WETHLogo,
    ratio: 5,
    fee: '0%',
  },
  {
    pid: 14,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x25d9ebc0186da816ef90d75742ff8e447dc6c9f2', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'SUV-AVAX',
    tokenSymbol: 'SUV-AVAX',
    icon: SUVAVAXLogo,
    ratio: 5,
    fee: '0%',
  },
  {
    pid: 15,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      43113: '0x25d9ebc0186da816ef90d75742ff8e447dc6c9f2', // rvs
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 1,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'SUV-USDC',
    tokenSymbol: 'SUV-USDC',
    icon: SUVUSDCLogo,
    ratio: 5,
    fee: '0%',
  },
  {
    pid: 8,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      43113: '0xaA1373d9ab4E0E7b938b32A8Dc9d1534E3FBDaEc', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0xfbb35bfa5b16135269560cED309245a0822b205A', // rvs
      43113: '0x1C3742A732cA374b2EAF7E3346Dc1Aa4F567a696', // rvs
      97: '0x0bB91424c6eb1Ece3c1382d3c46a9bf5a6C66296',
    },

    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // busd
    },
    bridge: 0,
    poolType: 3,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'Tequila',
    tokenSymbol: 'Tequila',
    icon: Nft1Logo,
    fee: '0%',
    nftType: true,
  },

  {
    pid: 9,
    lpAddresses: {
      56: '0xA8A91D4234f0354e7dCeD215A977a26f67472AF3', // rvs-busd
      97: '0xdDA5122129dC6C410db0f82a72C5032d390d683D', // rvs-busd pair
    },
    tokenAddresses: {
      43114: '0x723dfBFf89617b9497B47d678A351bb02C2AC91B', // rvs
      43113: '0x060D31998a3a31734C73B76d8bf36d983183c5fe', // rvs
      97: '0x9FDA3E9FC89eC51B0F8aD24294945Da1745Ae402',
    },
    baseTokenAddresses: {
      56: '0x610d1887a7D9fA93719bCe0bb43F59be09fc2223', // rvs
      97: '0xe5a985f5CBd11731ab5485877362961E806a68a6', // rvs
    },
    bridge: 0,
    poolType: 3,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'Fletcher',
    tokenSymbol: 'Fletcher',
    icon: Nft2Logo,
    fee: '0%',
    nftType: true,
  },
  {
    pid: 10,
    lpAddresses: {
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // CAKE-WBNB, need bridge wbnb-busd
      97: '0x3D24D404f4aFd860188fa7F96A902AEB59cE886b', // CAKE-WBNB, need bridge wbnb-busd
    },
    tokenAddresses: {
      43113: '0x42f7773b8886C9A13dC508819350200B0C5E9E1c', // CAKE
      43114: '0xE4227D0c87752bba1c81192AEb3Cb19c0575f53a', // CAKE
      97: '0x5997dDD1bE364e644f9B939c9edB39F9dd97Ad18',
    },
    baseTokenAddresses: {
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', // CAKE
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // CAKE
    },
    bridge: 1,
    poolType: 3,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'Orion',
    tokenSymbol: 'Orion',
    icon: Nft3Logo,
    fee: '0%',
    nftType: true,
  },
  {
    pid: 11,
    lpAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // BUSD
    },
    tokenAddresses: {
      43114: '0x83D7a230b54efD7691fe8d7C04633aFe520Dc026', // busd
      43113: '0xBF92B01B3Af79cdBe1a732a5453db8AB65D81CC0', // BUSD
      97: '0x99007b44490e55055A235841EF9e531dc5a82fBd',
    },
    baseTokenAddresses: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      97: '0x816070dd4eD4b5a16E71ad72CF215b31f16Ba6c2', // BUSD
      97: '0xa406c93c26571f46fD229eC79A00c59de30856B7',
    },
    bridge: 0,
    poolType: 3,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'Zeus',
    tokenSymbol: 'Zeus',
    icon: Nft4Logo,
    fee: '0%',
    nftType: true,
  },
  {
    pid: 12,
    lpAddresses: {
      97: '0xc221d0D92a88C780c49bc96C07720b6121fd80a0', // USDT-BUSD
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd',
    },
    tokenAddresses: {
      43113: '0xe0429E49684C7d583C4c317934D2734F97Dbd9D7', // USDT
      43114: '0x3d04b442e55dA3ef68F4E49ff3cC3Fe9A6A50642',
    },
    baseTokenAddresses: {
      97: '0xD1565c4B026013b8CF49a0d2270AE40DcE693999', // USDT
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    bridge: 0,
    poolType: 3,
    decimals: 18,
    showDecimals: 6,
    symbolShowing: 'Reese',
    tokenSymbol: 'Reese',
    icon: Nft5Logo,
    fee: '0%',
    nftType: true,
  },
]
