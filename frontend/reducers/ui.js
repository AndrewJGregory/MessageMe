import {
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  SET_SELECTED_USER_IDX,
  SET_HAS_SEARCHED,
  TOGGLE_DROPDOWN_MENU,
  SET_SELECTED_USER_ID,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions/ui";

const initialState = {
  searchQuery: "",
  selectedUserIdx: 0,
  hasSearched: false,
  selectedUserId: 0,
  isModelOpen: false,
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
    case SET_SELECTED_USER_ID:
      return Object.assign({}, state, {
        selectedUserId: action.selectedUserId,
      });
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return Object.assign({}, state, { isModalOpen: action.bool });
    default:
      return state;
  }
};

export default uiReducer;
