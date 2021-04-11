const initialState = {
  product: [],
  allProducts: [],
  searchProducts: [],
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        allProducts: action.payload,
        loading: false,
      };
    case "GET_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "GET_PRODUCT_DETAIL":
      return {
        ...state,
        product: action.payload,
      };
    case "SEARCH_PRODUCT":
      return {
        ...state,
        searchProducts: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
