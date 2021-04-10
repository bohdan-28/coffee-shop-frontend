const initialState = {
  product: {
    name: "",
    price: 0,
    size: "",
    description: "",
  },
  allProducts: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
      };
    case "GET_PRODUCT_ID":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
