import { RECEIVE_CURRENT_USER } from '../actions/user';
import { combineReducers } from "redux";
import entities from "./entities";
import errors from "./errors";
import session from "./session";
import ui from "./ui";

const appReducer = combineReducers({
  entities,
  session,
  errors,
  ui,
});

const rootReducer = (state, action) => {
  if (action.type === 'RECEIVE_CURRENT_USER' && action.user === null) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;

