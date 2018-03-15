export const RECEIVE_USER_SEARCH_RESULTS = "RECEIVE_USER_SEARCH_RESULTS";
import * as SearchUtil from "../util/search";

export const receiveUserSearchResults = users => {
  return {
    type: RECEIVE_USER_SEARCH_RESULTS,
    users
  };
};

export const fetchUsers = query => dispatch => {
  return SearchUtil.fetchUsers(query).then(users => {
    dispatch(receiveUserSearchResults(users));
    return users;
  });
};
