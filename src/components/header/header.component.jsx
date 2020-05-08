import React from 'react'
import './header.styles.scss'
import {
  HeaderCointainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles.jsx'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'

const Header = ({ currentUser, hidden }) => (
  <HeaderCointainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink className="option" to="/signin">
          SIGN IN{' '}
        </OptionLink>
      )}
      <CartIcon></CartIcon>
    </OptionsContainer>
    {hidden ? null : <CartDropdown></CartDropdown>}
  </HeaderCointainer>
)

const mapStateToProps = (state) =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  })

export default connect(mapStateToProps)(Header)
