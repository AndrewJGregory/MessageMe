import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";
import { RECEIVE_CURRENT_USER } from "../actions/session";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SEARCH_RESULTS:
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.users);
    default:
      return state;
  }
};
