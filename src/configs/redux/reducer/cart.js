const initialState = {
  cart: [],
  failed: false
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        failed: false
      };
      case "GET_CART_FAILED":
      return {
        ...state,
        failed: true
      };
      case "GET_CART_AFTER_FAILED":
      return {
        ...state,
        failed: false
      };
    default:
      return state;
  }
};

export default cartReducer;
