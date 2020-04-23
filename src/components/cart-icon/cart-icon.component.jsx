import React from 'react'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { connect } from 'react-redux'
import toggleCartHidden from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = (props, { itemCount }) => {
  console.log('i am called', itemCount)
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count"> {props.itemCount} </span>
    </div>
  )
}

const mapDispatchtoProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
})

const mapStatetoProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})

export default connect(mapStatetoProps, mapDispatchtoProps)(CartIcon)
