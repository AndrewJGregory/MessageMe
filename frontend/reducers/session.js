import { RECEIVE_CURRENT_USER } from "../actions/session";
import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const initialState = {
  currentUser: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { currentUser: action.user });
    default:
      return state;
  }
};

export default sessionReducer;
