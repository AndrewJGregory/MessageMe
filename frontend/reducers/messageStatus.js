import { RECEIVE_MESSAGE, RECEIVE_MESSAGE_STATUS } from "../actions/message";

import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const messageStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.payload.message_statuses);
    case RECEIVE_MESSAGE_STATUS:
      return Object.assign({}, state, action.messageStatus);
    default:
      return state;
      break;
  }
};

export default messageStatusReducer;
