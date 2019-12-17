import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);
export const selectCartItemsCount = createSelector([selectCartItems], (items = []) =>
  items.reduce((sum, { count }) => sum + count, 0)
);
export const selectTotalPrice = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((totalCost, item) => totalCost + item.count * item.price, 0)
);

export const selectIsCartVisible = createSelector([selectCart], cart => cart.isVisible);
