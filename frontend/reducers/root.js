import { combineReducers } from "redux";
import entities from "./entities";
import errors from "./errors";
import session from "./session";
import ui from "./ui";

const rootReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

export default rootReducer;
