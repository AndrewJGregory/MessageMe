import {
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  SET_SELECTED_USER_IDX,
  SET_HAS_SEARCHED,
} from "../actions/ui";
const initialState = {
  searchQuery: "",
  selectedUserIdx: 0,
  hasSearched: false,
};

const uiReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, action.query);
    case CLEAR_SEARCH_QUERY:
      newState["searchQuery"] = "";
      return Object.assign({}, state, newState);
    case SET_SELECTED_USER_IDX:
      return Object.assign({}, state, {
        selectedUserIdx: action.selectedUserIdx,
      });
    case SET_HAS_SEARCHED:
      return Object.assign({}, state, { hasSearched: action.bool });
    default:
      return state;
  }
};

export default uiReducer;
