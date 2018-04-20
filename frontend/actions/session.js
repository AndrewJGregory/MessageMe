import * as SessionUtil from "../util/session";
export const SIGNOUT = "SIGNOUT";
export const SIGNIN = "SIGNIN";
export const SIGNUP = "SIGNUP";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const SIGN_OUT_CURRENT_USER = "SIGN_OUT_CURRENT_USER";

export const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};
export const receiveCurrentUser = payload => {
  return {
    type: RECEIVE_CURRENT_USER,
    payload
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
    errors: {}
  };
};

export const signOutActionCreator = () => {
  return {
    type: SIGN_OUT_CURRENT_USER,
    currentUser: null
  };
};

export const signOutThunk = () => dispatch => {
  const noCurrentUserPayload = {
    users: { "-1": { username: null, id: null, isCurrentUser: true } }
  };
  return SessionUtil.signOut().then(
    payload => {
      dispatch(signOutActionCreator());
    },
    errors => {
      dispatch(receiveSessionErrors(errors.responseJSON));
      return errors;
    }
  );
};

export const signIn = user => dispatch => {
  return SessionUtil.signIn(user).then(
    payload => {
      dispatch(receiveCurrentUser(payload));
      return payload;
    },
    errors => {
      dispatch(receiveSessionErrors(errors.responseJSON));
      return errors;
    }
  );
};

export const signUp = user => dispatch => {
  return SessionUtil.signUp(user).then(
    payload => {
      dispatch(receiveCurrentUser(payload));
      return payload;
    },
    errors => {
      dispatch(receiveSessionErrors(errors.responseJSON));
      return errors;
    }
  );
};
