import { RECEIVE_CURRENT_USER } from "../actions/session";

const initialState = {
  currentUser: null
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
