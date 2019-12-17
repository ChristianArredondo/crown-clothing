import { cartTypes } from './cart.types';

const INITIAL_STATE = {
  isVisible: null,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART: {
      return {
        ...state,
        isVisible: !state.isVisible
      };
    }
    case cartTypes.ADD_ITEM: {
      const cartItem = state.cartItems.find(item => item.id === action.payload.id);

      if (!cartItem) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, count: 1 }]
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
        )
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
