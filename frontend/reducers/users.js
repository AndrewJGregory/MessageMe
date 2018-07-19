import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";
import { RECEIVE_USER_SIGN_IN_DATA, RECEIVE_USER } from "../actions/user";
import { RECEIVE_MESSAGE_PAYLOAD } from "../actions/message";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state, action.user);
    case RECEIVE_MESSAGE_PAYLOAD:
      return Object.assign({}, state, action.payload.user);
    default:
      return state;
  }
};
