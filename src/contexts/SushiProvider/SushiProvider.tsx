import React, { createContext, useEffect, useState } from "react";

import { useWallet } from "use-wallet";
import useConnectWallet from "../../hooks/useConnectWallet";

import { Sushi } from "../../sushi";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "src/contexts/Metamask/connectors";
export interface SushiContext {
  sushi?: typeof Sushi;
}

export const Context = createContext<SushiContext>({
  sushi: undefined,
});

declare global {
  interface Window {
    sushisauce: any;
  }
}
let window1: any = window;
const SushiProvider: React.FC = ({ children }) => {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId: chainId2,
    account,
    activate: connect,
    deactivate,
    active,
    error,
  } = context;
  const [sushi, setSushi] = useState<any>();
  const [connectWallet] = useConnectWallet();
  // @ts-ignore
  window.sushi = sushi;
  // @ts-ignore
  window.eth = library?.provider;
  useEffect(() => {
    if (library) {
      const chainId = Number(chainId2);
      const sushiLib = new Sushi(library?.provider, chainId, false, {
        defaultAccount: account,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: "6000000",
        defaultGasPrice: "1000000000000",
        accounts: [],
        ethereumNodeTimeout: 10000,
      });
      setSushi(sushiLib);
      window.sushisauce = sushiLib;
    }
  }, [library?.provider, window1?.ethereum?.chainId]);

  useEffect(() => {
    /* 不加延时，account会是空 */
    setTimeout(() => {
      connectWallet();
    }, 500);
  }, []);

  return <Context.Provider value={{ sushi }}>{children}</Context.Provider>;
};

export default SushiProvider;
