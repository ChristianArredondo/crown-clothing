import { cartTypes } from './cart.types';

const INITIAL_STATE = {
  isVisible: null
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART: {
      return {
        ...state,
        isVisible: !state.isVisible
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
