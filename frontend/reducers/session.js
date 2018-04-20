import {
  RECEIVE_CURRENT_USER,
  SIGN_OUT_CURRENT_USER
} from "../actions/session";

const initialState = {
  currentUser: null
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = Object.values(action.payload.users).filter(
        user => user.isCurrentUser
      )[0];
      return Object.assign({}, state, { currentUser });
    case SIGN_OUT_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.currentUser });
    default:
      return state;
  }
};

export default sessionReducer;
