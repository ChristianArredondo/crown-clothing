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
    case cartTypes.REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    }
    case cartTypes.DECREMENT_ITEM: {
      if (action.payload.count === 1) {
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, count: item.count - 1 } : item
        )
      };
    }
    case cartTypes.CLEAR_CART: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default cartReducer;
