import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

import {Route, Switch} from "react-router-dom"

 

function App() {
  return <div>
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/shop" component={ShopPage}></Route>
    </Switch>
  </div>
}

export default App;
