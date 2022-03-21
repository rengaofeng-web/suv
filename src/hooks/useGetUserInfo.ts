import { useCallback, useEffect, useState } from "react";

import useSushi from "./useSushi";
import { useWallet } from "use-wallet";

import {
    harvest,
    getHelperChefContract1,
    getMasterChefContract,
    getMasterChefAddress,
    getFarmInfo,
    getHttpTotalLPWethValue2,
    getFarms,
    getTotalWeight,
    getPoolInfo,
    getUserInfo
} from "../sushi/utils";
import { StakedValue } from "./useAllStakedValue";
import axios from "axios";
import BigNumber from "bignumber.js";
import useBlock from "./useBlock10";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "src/contexts/Metamask/connectors";

const useGetUserInfo = (pids?: number[]) => {
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
    const helperContract1 = getHelperChefContract1(sushi);
    const [balances, setBalance] = useState([] as Array<any>);
    const [totalW, setTotalW] = useState("");
    const block = useBlock();
    const getTotalW = useCallback(async () => {
        let totalW = await getTotalWeight(masterChefContract);
        // console.log(tottotalWalW)
        setTotalW(totalW);
    }, [account, pids, sushi, masterChefContract]);

    let pid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let lpToken = [
        "0x760E94bF9074518f6bE4a7C60908191a48DE23Fc",
        "0x90927eE57012B5Ad75c6AB64Fd72E97aB4BA079F",
        "0x8C4B94087EBE3e59f4150e973ac958e7de538461",
        "0x3C216aDE605759e957a36caC69B3c53b28552db4",
        "0x5Dddfcc9F7ce7fAaEE529c1B3b88c812F4E3Dfb0",
        "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
        "0x8e93c8E63e054729dAa5D56b3f9Da262a834016F",
        "0x95ef6B0a5DCBBa4b0a02778013ac1080C9BD7D1c",
        "0x8653C7A7e490Cfc09d12bC6f46775D085CeAcBb9",
        "0xeedFa3e9FEf3A2ADA86C5850a01aa6b1CafF47a4",
        "0x3dFD94E5dcd0AaC03bDEC6f4686F6eC995BDa00b",
        "0xe69F09c050577aBa6DB21c442F8feD8F86e61F58",
        "0x0Cd3a513Fce417cEc2bf3040A127bFe22641C074",
        "0x7aAB006B994b29cc63B914Ca6a2DdF7731141B50",
    ];
    let farmsAddresses = [
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
        "0x0d1eBdfF5f72FF891fcf03785173aEf0E4D26013",
        "0x0f0E921bCb85296B89ef9356DA3DD8a2DA98d7E5",
        "0x379DDA509aF22cCb4AA14c781c006a0f652bf074",
        "0x7a4EacF701b9d20b6F5A0d1201d1676803c3b97C",
        "0x94FF5485a150646E93c31182d6Ef8805aDDD6AaD",
        "0x39862C66130978cD69d2F93Aaa7260d02CC64054",
        "0x75b7a14D41a44Ff22C24e415dFe226195E5A9e41",
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
        "0xD82247C326d131a8FE90453452c9e5F27B63c128",
    ];

    const getInfos = useCallback(async () => {
        // let farmInfo1 = await getFarmInfo(helperContract, masterChefAddress, pids,account);
        let farmInfo1 = await getUserInfo(helperContract1, masterChefAddress, pids ? pids : pid, account, lpToken, farmsAddresses);

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
    }, [account, sushi, helperContract1, masterChefContract]);

    useEffect(() => {
        if (helperContract1?.options?.address && sushi) {
            fetchAllStakedValueHttp();
            getTotalW();
        }
    }, [account, helperContract1, setBalance, sushi, masterChefContract, block]);

    return { balances, totalW };
};

export default useGetUserInfo;
