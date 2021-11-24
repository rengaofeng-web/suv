import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { HashRouter, Route, Switch } from 'react-router-dom';

import { Route, HashRouter } from 'react-keeper'
import Home from './views/Home/Home'
function App() {
  return (
    <div className="App">
     <HashRouter>
          <div>
            <Route cache  path="/" component={()=><Home/>} />
          </div>
        </HashRouter>
    </div>
  );
}

export default App;
