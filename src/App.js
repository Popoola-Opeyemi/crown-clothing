import React from 'react'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from "./components/header/header.component"
import SignInnAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from "./pages/checkout/checkout.component"

import { Route, Switch, Redirect } from "react-router-dom"
import { setCurrentUser } from "./redux/user/user.actions"
import { connect } from "react-redux"
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
class App extends React.Component {

  unsubScribeFromAuth = null

  componentDidMount() {

    const { setCurrentUser } = this.props
    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unsubScribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/checkout" component={CheckoutPage}></Route>
          <Route exact path="/signin" render={() => this.props.CurrentUser ? (<Redirect to="/"></Redirect>) : (<SignInnAndSignUpPage></SignInnAndSignUpPage>)}></Route>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
  CurrentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
