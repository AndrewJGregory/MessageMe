import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";
import { RECEIVE_USER_SIGN_IN_DATA, RECEIVE_USER } from "../actions/user";
export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state, action.user);
    default:
      return state;
  }
};
