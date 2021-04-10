const initialState = {
  insertProduct: {
    name: "",
    price: "1",
    categoryID: "1",
    description: "",
    size: "",
    deliveryMethod: "",
    hourStart: "00:00",
    hourEnd: "00:00",
    stock: "1",
  },
  getProduct: {},
  loading: false,
  message: "",
};

const productAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_PRODUCT_SUCCESS":
      return {
        ...state,
        insertProduct: {
          ...state.insertProduct,
          ...action.payload,
        },
        loading: false,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        getProduct: {
          ...state.getProduct,
          ...action.payload,
        },
        loading: false,
      };
    case "GET_PRODUCT_SUCCESS":
      return {
        ...state,
        getProduct: {},
        loading: false,
      };
    case "ONCHANGE_INSERT_PRODUCT":
      return {
        ...state,
        insertProduct: {
          ...state.insertProduct,
          ...action.payload,
        },
      };
    case "ONCHANGE_GET_PRODUCT":
      return {
        ...state,
        getProduct: {
          ...state.getProduct,
          ...action.payload,
        },
      };
    case "PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default productAdminReducer;
