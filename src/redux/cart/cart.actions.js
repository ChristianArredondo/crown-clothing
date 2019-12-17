import { cartTypes } from './cart.types';

export const toggleCartAction = () => ({
  type: cartTypes.TOGGLE_CART
});

export const addCartItemAction = cartItem => ({
  type: cartTypes.ADD_ITEM,
  payload: cartItem
});

export const removeCartItem = cartItem => ({
  type: cartTypes.REMOVE_ITEM,
  payload: cartItem
});
