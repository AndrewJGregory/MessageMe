import { SET_SEARCH_QUERY, CLEAR_SEARCH_QUERY } from "../actions/ui";

const initialState = { searchQuery: "" };

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, action.query);
    case CLEAR_SEARCH_QUERY:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default uiReducer;
