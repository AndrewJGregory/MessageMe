import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, action.users);
    default:
      return state;
  }
};
