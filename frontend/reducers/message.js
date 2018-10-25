import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  SEE_MESSAGE,
  RECEIVE_MESSAGE_PAYLOAD,
} from "../actions/message";
import { REMOVE_CHAT } from "../actions/chat";
import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
    case SEE_MESSAGE:
      return Object.assign({}, state, action.message);
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.messages);
    case RECEIVE_MESSAGE_PAYLOAD:
      return Object.assign({}, state, action.payload.message);
    case REMOVE_CHAT:
      const messages = Object.assign({}, state);
      const newMessages = {};
      for (let id in messages) {
        if (action.payload.chat_id !== messages[id].chat_id) {
          newMessages[id] = messages[id];
        }
      }
      return newMessages;
    default:
      return state;
  }
};

export default messageReducer;
