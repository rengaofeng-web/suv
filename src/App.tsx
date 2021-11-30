import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// 组件导入
import Header from "./components/Header/Header"; //header
import { Route, HashRouter } from "react-keeper";
import Home from "./views/Home/Home";
import Pool from "./views/Pool/Pool";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <HashRouter>
        <div className="rooter-view">
          <Route cache path="/" component={() => <Home />} />
          <Route cache path="/pool" component={() => <Pool />} />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
