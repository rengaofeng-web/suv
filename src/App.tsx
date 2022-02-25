import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import wholeBg from "./assets/PC-config/bg2.jpg"; //pc整体背景图
import isMobile from "is-mobile";
// 组件导入
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Pool from "./views/Pool/Pool";
import Details from "./views/Details/Details";
import Stake from "./views/Stake/Stake";
import Withdraw from "./views/Withdraw/Withdraw";
import SuvBox from "./views/SuvBox/SuvBox";
import NftFarams from "./views/NftFarams/NftFarams";
import Owned from "./views/Owned/Owned";
import OwnedNone from "./views/OwnedNone/OwnedNone";


import { useWallet, UseWalletProvider } from "use-wallet";
import { makeStore } from "src/redux/store";
import { StoreContext } from "redux-react-hook";
import FarmsProvider from "./contexts/Farms";

import ModalsProvider from "./contexts/Modals";
import TransactionProvider from "./contexts/Transactions";
import SushiProvider from "./contexts/SushiProvider";
import theme from "./theme";
import { chainRPCs, supportedChainId } from "./sushi/lib/constants";
import { BscConnector, UserRejectedRequestError } from "@binance-chain/bsc-connector";
import { getApyData } from "./hooks/useApyDefault";
import MetamaskProvider from "./contexts/Metamask";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
const isM: boolean = isMobile();
const Layout: React.FC<{}> = () => {
  return (
    <AppStyle className="App">
      <Header></Header>
      <div className="router-container">
        <Switch>
          <Route path="/" component={() => <Home />} exact />
          <Route path="/pool">
            <Pool />
          </Route>
          <Route path="/details/:farmId" component={() => <Details />} />
          <Route path="/stake/:farmId" component={() => <Stake />} />
          <Route path="/withdraw/:farmId" component={() => <Withdraw />} />
          <Route path="/suvBox" component={() => <SuvBox />} />
          <Route path="/nftFarams" component={() => <NftFarams />} />
          <Route path="/owned" component={() => <Owned />} />
          <Route path="/ownedNone" component={() => <OwnedNone />} />
        </Switch>
      </div>
    </AppStyle>
  );
};

const App: React.FC<{}> = () => {
  return (
    <Router>
      <Providers>
        {" "}
        <Layout />{" "}
      </Providers>
    </Router>
  );
};
const Providers: React.FC = ({ children }) => {
  const store = makeStore();
  return (
    <StoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <UseWalletProvider
          chainId={supportedChainId}
          connectors={{
            // @ts-ignore
            bsc: {
              web3ReactConnector() {
                return new BscConnector({ supportedChainIds: [56, 97] });
              },
              handleActivationError(err: any) {
                if (err instanceof UserRejectedRequestError) {
                  // @ts-ignore
                  return new ConnectionRejectedError();
                }
              },
            },
            walletconnect: { rpcUrl: chainRPCs[supportedChainId] },
          }}
        >
          <MetamaskProvider>
            <SushiProvider>
              <TransactionProvider>
                <FarmsProvider>
                  <ModalsProvider>{children}</ModalsProvider>
                </FarmsProvider>
              </TransactionProvider>
            </SushiProvider>
          </MetamaskProvider>
        </UseWalletProvider>
      </ThemeProvider>
    </StoreContext.Provider>
  );
};

const AppStyle = !isM
  ? styled.div`
      position: relative;
      height: 100vh;
      overflow-y: scroll;
      background: url(${wholeBg});
      background-repeat: no-repeat;
      background-size: cover;
    `
  : styled.div`
      position: relative;
    `;

export default App;
