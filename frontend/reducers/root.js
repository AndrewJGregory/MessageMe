import { combineReducers } from "redux";
import session from "./session";
import errors from "./errors";
import search from "./search";

const rootReducer = combineReducers({
  session,
  errors,
  search
});

export default rootReducer;
