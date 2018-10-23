export const CLEAR_SEARCH_QUERY = "CLEAR_SEARCH_QUERY";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_SELECTED_USER_IDX = "SET_SELECTED_USER_IDX";
export const SET_HAS_SEARCHED = "SET_HAS_SEARCHED";
export const SET_SELECTED_USER_ID = "SET_SELECTED_USER_ID";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const setSelectedUserIdx = selectedUserIdx => {
  return {
    type: SET_SELECTED_USER_IDX,
    selectedUserIdx,
  };
};

export const setSearchQuery = query => {
  return {
    type: SET_SEARCH_QUERY,
    query,
  };
};

export const clearSearchQuery = () => {
  return {
    type: CLEAR_SEARCH_QUERY,
  };
};

export const setHasSearched = bool => {
  return {
    type: SET_HAS_SEARCHED,
    bool,
  };
};

export const setSelectedUserId = selectedUserId => {
  return {
    type: SET_SELECTED_USER_ID,
    selectedUserId,
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    bool: true,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    bool: false,
  };
};
