import * as SessionUtil from "../util/session";
export const SIGNOUT = "SIGNOUT";
export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const signOut = () => dispatch => {
  return SessionUtil.signOut().then(payload => {
    dispatch(receiveCurrentUser(null));
    return payload;
  });
};

export const signIn = user => dispatch => {
  return SessionUtil.signIn(user).then(payload => {
    dispatch(receiveCurrentUser(payload));
    return payload;
  });
};

export const signUp = user => dispatch => {
  return SessionUtil.signUp(user).then(payload => {
    dispatch(receiveCurrentUser(payload));
    return payload;
  });
};
