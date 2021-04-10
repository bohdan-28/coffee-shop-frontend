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
    case "ONCHANGE_INSERT_PRODUCT":
      return {
        ...state,
        insertProduct: {
          ...state.insertProduct,
          ...action.payload,
        },
      };
    case "INSERT_PRODUCT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default productAdminReducer;
