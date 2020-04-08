import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component"

import {Route, Switch} from "react-router-dom"

 

function App() {
  return <div>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
    </Switch>
  </div>
}

export default App;
