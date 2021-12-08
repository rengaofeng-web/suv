import React from "react";
import styled from "styled-components";

// import logo from './logo.svg';
// import './App.css';
// import { HashRouter, Route, Switch } from 'react-router-dom';
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
const AppStyle = styled.div`
  .App {
    /* text-align: center; */
    position: relative;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default App;
