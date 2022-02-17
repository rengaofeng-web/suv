import BigNumber from "bignumber.js";
import { Contract } from "web3-eth-contract";

export interface Farm {
  key: string;
  pid: number;
  name: string;
  lpToken: string;
  lpTokenAddress: string;
  lpContract: Contract;
  tokenContract: Contract;
  tokenAddress: string;
  baseTokenAddress: string;
  earnToken: string;
  earnTokenAddress: string;
  icon: string;
  id: string;
  tokenSymbol: string;
  pumpFee: string;
  symbolShowing: string;
  lockHint: string;
  rewardMultipler: string;
  rewardMultiplerColor: string;
  poolType: number;
  decimals: number;
  showDecimals: number;
  bridge: number;
  depositFee: number;
  ratio: number;
  nftType?: boolean;
  fee?: string;
  suoha?: number;
  apy?: string;
  apyD?: string;
  sushiPerYear?: number;
  tokenAmount?: BigNumber;
  wethAmount?: BigNumber;
  totalWethValue?: BigNumber;
  tokenPriceInWeth?: BigNumber;
  poolWeight?: BigNumber;
  lpTokenPrice?: BigNumber;
  lpTokenAmount?: BigNumber;
  lpTVL?: BigNumber;
  earned?: BigNumber;
  userTokenAmount?: BigNumber;
  myTVL?: BigNumber;
  price?: string;
  tokenBalance?: string;
  userStaked?: string;
  userAllowance?: string;
  userPending0?: string;
  userPending1?: string;
  apyR?: string;
  apyDR?: string;
  amount?: string;
  stakedValue1?: string;
  tvl?: string;
  allocPoint?: string;
  totalPoolWeight?: string;
}

export interface FarmsContext {
  farms: Farm[];
  unharvested: number;
}
