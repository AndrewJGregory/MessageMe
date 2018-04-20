import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message";
import { RECEIVE_CURRENT_USER } from "../actions/session";

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message);
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.payload.messages);
    default:
      return state;
  }
};

export default messageReducer;
