import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import productAdminReducer from "./productAdmin";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productAdmin: productAdminReducer,
  cart: cartReducer,
});

export default rootReducer;
