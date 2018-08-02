import {
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  INCREMENT_SELECTED_USER_IDX,
  DECREMENT_SELECTED_USER_IDX
} from "../actions/ui";
const initialState = { searchQuery: "", selectedUserIdx: 0 };

const uiReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, action.query);
    case CLEAR_SEARCH_QUERY:
      return Object.assign({}, state, initialState);
    case INCREMENT_SELECTED_USER_IDX:
      newState["selectedUserIdx"] = newState["selectedUserIdx"] + 1;
      return newState;
    case DECREMENT_SELECTED_USER_IDX:
      newState["selectedUserIdx"] = newState["selectedUserIdx"] - 1;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
