import CartActionTypes from "./cart.types"

const toggleCartHidden = (item) => ({
  type: CartActionTypes.TOGGLE_HIDDEN
})

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})

export default toggleCartHidden