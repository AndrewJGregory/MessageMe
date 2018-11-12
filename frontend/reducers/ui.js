import {
  CLEAR_SEARCH_QUERY,
  CLOSE_DROPDOWN_MENU,
  CLOSE_MODAL,
  OPEN_DROPDOWN_MENU,
  OPEN_MODAL,
  SET_HAS_SEARCHED,
  SET_SEARCH_FOCUS,
  SET_SEARCH_QUERY,
  SET_SELECTED_USER_ID,
  SET_SELECTED_USER_IDX,
  TOGGLE_DROPDOWN_MENU,
} from "../actions/ui";

const initialState = {
  searchQuery: "",
  selectedUserIdx: 0,
  hasSearched: false,
  selectedUserId: 0,
  isModelOpen: false,
  isDropdownMenuOpen: false,
  shouldSearchBeFocused: false,
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
    case OPEN_DROPDOWN_MENU:
    case CLOSE_DROPDOWN_MENU:
      return Object.assign({}, state, { isDropdownMenuOpen: action.bool });
    case SET_SEARCH_FOCUS:
      return Object.assign({}, state, { shouldSearchBeFocused: action.bool });
    default:
      return state;
  }
};

export default uiReducer;
