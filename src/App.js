import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component"
import SignInnAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {Route, Switch} from "react-router-dom"
import { auth } from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser:null
    }
  }
  unsubScribeFromAuth = null

  componentDidMount(){
    this.unsubScribeFromAuth = auth.onAuthStateChanged(user => { 
      this.setState ({currentUser:user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubScribeFromAuth()
  }

  render(){
    return (
    <div>
      <Header currentUser={this.state.currentUser}></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInnAndSignUpPage}></Route>
      </Switch>
    </div>
    )
  }
} 

export default App;
