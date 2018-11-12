import {
  CLEAR_SESSION_ERRORS,
  RECEIVE_SESSION_ERRORS,
} from "../actions/session";

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
    case CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, { session: action.errors });
    default:
      return state;
  }
};

export default errorsReducer;
