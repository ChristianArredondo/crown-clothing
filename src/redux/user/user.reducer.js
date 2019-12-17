const INITIAL_STATE = {
  authUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER': {
      return {
        ...state,
        authUser: action.payload
      };
    }
    default:
      return state;
  }
};

export default userReducer;
