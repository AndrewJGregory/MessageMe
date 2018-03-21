import { combineReducers } from "redux";
import entities from "./entities";
import session from "./session";
import errors from "./errors";
import search from "./search";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  search
});

export default rootReducer;
