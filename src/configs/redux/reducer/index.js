import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import productAdminReducer from "./productAdmin";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  productAdmin: productAdminReducer,
});

export default rootReducer;
