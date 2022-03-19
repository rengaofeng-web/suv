import { useCallback, useEffect, useState } from "react";

import useSushi from "./useSushi";
import { useWallet } from "use-wallet";

import {
  harvest,
  getHelperChefContract,
  getMasterChefContract,
  getMasterChefAddress,
  getFarmInfo,
  getHttpTotalLPWethValue2,
  getFarms,
  getTotalWeight,
  getHelperChefContract1,
  getUserInfo,
  getPoolInfo
} from "../sushi/utils";
import { StakedValue } from "./useAllStakedValue";
import axios from "axios";
import BigNumber from "bignumber.js";
import useBlock from "./useBlock10";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "src/contexts/Metamask/connectors";

const useFarmInfo = (pids: number[]) => {
  const context = useWeb3React<any>();
  const {
    connector,
    library,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate: reset,
    active,
    error,
  } = context;
  const sushi = useSushi();
  const farms = getFarms(sushi);
  const masterChefAddress = getMasterChefAddress(sushi);
  const masterChefContract = getMasterChefContract(sushi);
  const helperContract = getHelperChefContract(sushi);
  const helperContract1 = getHelperChefContract1(sushi);
  const [balances, setBalance] = useState([] as Array<any>);
  const [totalW, setTotalW] = useState("");
  const block = useBlock();
  const getTotalW = useCallback(async () => {
    let totalW = await getTotalWeight(masterChefContract);
    // console.log(tottotalWalW)
    setTotalW(totalW);
  }, [account, pids, sushi, masterChefContract]);


  const getInfos = useCallback(async () => {
    // let farmInfo1 = await getFarmInfo(helperContract, masterChefAddress, pids,account);
    let farmInfo1 = await getPoolInfo(helperContract1, masterChefAddress, pids);
    return farmInfo1;
  }, [account, pids, sushi, masterChefAddress]);
  const fetchAllStakedValueHttp = useCallback(async () => {
    getInfos().then((farmInfo) => {
      const balances: Array<any> = farmInfo?.map((item: any, index: number) => {
        // console.log(farmInfo)
        return {
          tokenBalance: item.balance,
          userStaked: item.amount1,
          userAllowance: item.allowance,
          userPending0: item.pending, //pending
          // userPending1: item.pending1,
          lockTimes: item.untilLock,
          allocPoint: item.allocPoint,
          totalAmount: item.amount,
          lpToken: item.lpToken
        };
      });
      setBalance(balances);
    });
  }, [account, sushi, helperContract, masterChefContract]);

  useEffect(() => {
    if (helperContract?.options?.address && sushi) {
      fetchAllStakedValueHttp();
      getTotalW();
    }
  }, [account, helperContract, setBalance, sushi, masterChefContract, block]);

  return { balances, totalW };
};

export default useFarmInfo;
