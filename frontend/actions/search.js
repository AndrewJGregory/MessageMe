export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";

import * as SearchUtil from "../util/search";

export const receiveUserSearchResults = payload => {
  return {
    type: RECEIVE_USER_SEARCH_RESULTS,
    payload,
  };
};

export const searchUsers = query => dispatch => {
  return SearchUtil.searchUsers(query).then(payload => {
    dispatch(receiveUserSearchResults(payload));
    return payload;
  });
};
