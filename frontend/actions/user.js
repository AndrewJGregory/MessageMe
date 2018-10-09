import * as UserUtil from "../util/user";
export const RECEIVE_USER_SIGN_IN_DATA = "RECEIVE_USER_SIGN_IN_DATA";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveUserSignInData = payload => {
  return {
    type: RECEIVE_USER_SIGN_IN_DATA,
    payload,
  };
};

export const fetchUserSignInData = currentUserId => dispatch => {
  return UserUtil.fetchUserSignInData(currentUserId).then(payload => {
    dispatch(receiveUserSignInData(payload));
    return payload;
  });
};
