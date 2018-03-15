import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";

const initialState = {
  users: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, { users: action.users });
    default:
      return state;
  }
};
