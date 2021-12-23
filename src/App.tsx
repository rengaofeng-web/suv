import React from "react";
import styled from "styled-components";
import wholeBg from "./assets/PC-config/bg2.jpg"; //pc整体背景图
import isMobile from "is-mobile";

import { Route, HashRouter } from "react-keeper";
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
const isM: boolean = isMobile();
const App: React.FC<{}> = () => {
  return (
    <AppStyle className="App">
      <Header></Header>
      <HashRouter>
        <div className="router-container">
          <Route path="/" component={() => <Home />} />
          <Route path="/pool" component={() => <Pool />} />
          <Route path="/details" component={() => <Details />} />
          <Route path="/stake" component={() => <Stake />} />
          <Route path="/withdraw" component={() => <Withdraw />} />
          <Route path="/suvBox" component={() => <SuvBox />} />
          <Route path="/nftFarams" component={() => <NftFarams />} />
          <Route path="/owned" component={() => <Owned />} />
          <Route path="/ownedNone" component={() => <OwnedNone />} />
        </div>
      </HashRouter>
    </AppStyle>
  );
};
const AppStyle = !isM
  ? styled.div`
      position: relative;
      height: 100vh;
      overflow: scroll;
      background: url(${wholeBg});
      background-repeat: no-repeat;
      background-size: cover;
    `
  : styled.div`
      position: relative;
    `;

export default App;
