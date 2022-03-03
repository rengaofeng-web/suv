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
  const [balances, setBalance] = useState([] as Array<any>);
  const [totalW, setTotalW] = useState("");
  const block = useBlock();
  const getTotalW = useCallback(async () => {
    let totalW = await getTotalWeight(masterChefContract);
    // console.log(tottotalWalW)
    setTotalW(totalW);
  }, [account, pids, sushi, masterChefContract]);

  const getInfos = useCallback(async () => {
    let farmInfo1 = await getFarmInfo(
      helperContract,
      masterChefAddress,
      pids,
      account || "0x61a6e964fe93DA08745F46A95Fe13BAc2a0f2289"
    );

    return farmInfo1;
  }, [account, pids, sushi, masterChefAddress]);

  const fetchAllStakedValueHttp = useCallback(async () => {
    getInfos().then((farmInfo) => {
      const balances: Array<any> = farmInfo?.map((item: any, index: number) => {
        return {
          tokenBalance: item.balance,
          userStaked: item.userData0,
          userAllowance: item.allowance,
          userPending0: item.pending0,
          userPending1: item.pending1,
          lockTimes: item.userData2,
          allocPoint: item.allocPoint,
          totalAmount: item.amount,
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
