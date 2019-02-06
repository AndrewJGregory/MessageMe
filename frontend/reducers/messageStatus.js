import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const messageStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.message_statuses);
    default:
      return state;
      break;
  }
};

export default messageStatusReducer;
