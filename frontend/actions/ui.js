export const CLEAR_SEARCH_QUERY = "CLEAR_SEARCH_QUERY";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const INCREMENT_SELECTED_USER_IDX = "INCREMENT_SELECTED_USER_IDX";
export const DECREMENT_SELECTED_USER_IDX = "DECREMENT_SELECTED_USER_IDX";
export const RESET_SELECTED_USER_IDX = "RESET_SELECTED_USER_IDX";

export const resetSelectedUserIdx = () => {
  return {
    type: RESET_SELECTED_USER_IDX,
    selectedUserIdx: 0
  };
};

export const incrementSelectedUserIdx = () => {
  return {
    type: INCREMENT_SELECTED_USER_IDX
  };
};

export const decrementSelectedUserIdx = () => {
  return {
    type: DECREMENT_SELECTED_USER_IDX
  };
};

export const setSearchQuery = query => {
  return {
    type: SET_SEARCH_QUERY,
    query
  };
};

export const clearSearchQuery = () => {
  return {
    type: CLEAR_SEARCH_QUERY
  };
};
