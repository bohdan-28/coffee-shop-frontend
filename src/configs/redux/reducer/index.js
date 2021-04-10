import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});

export default rootReducer;
