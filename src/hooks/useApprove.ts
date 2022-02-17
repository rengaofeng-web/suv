import { useCallback } from "react";

import useSushi from "./useSushi";
import { useWallet, Wallet } from "use-wallet";
import { provider } from "web3-core";
import { Contract } from "web3-eth-contract";

import { approve, getMasterChefContract, nftApprove } from "../sushi/utils";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "src/contexts/Metamask/connectors";

const useApprove = (lpContract: Contract, isNft?: boolean) => {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library: ethereum,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context;
  const sushi = useSushi();
  const masterChefContract = getMasterChefContract(sushi);

  const handleApprove = useCallback(async () => {
    try {
      if (!isNft) {
        const tx = await approve(
          lpContract,
          masterChefContract.options.address,
          account
        );
        return tx;
      } else {
        const tx = await nftApprove(
          lpContract,
          masterChefContract.options.address,
          account
        );
        return tx;
      }
    } catch (e) {
      return null;
    }
  }, [account, lpContract, masterChefContract]);

  return { onApprove: handleApprove };
};

export default useApprove;
