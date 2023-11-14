import { combineReducers } from "redux";
import iceCreamreducer from "./iceCream/iceCreamReducer";
import { cakeReducer } from "./cake/cakeReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamreducer,
  user: userReducer,
});

export default rootReducer;
