import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE_PAYLOAD,
  RECEIVE_MESSAGE_STATUS,
} from "../actions/message";

import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";
import { REMOVE_CHAT } from "../actions/chat";

const messageReducer = (state = {}, action) => {
  const messages = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message);
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.messages);
    case RECEIVE_MESSAGE_PAYLOAD:
      return Object.assign({}, state, action.payload.message);
    case REMOVE_CHAT:
      const newMessages = {};
      for (let id in messages) {
        if (action.payload.chat_id !== messages[id].chat_id) {
          newMessages[id] = messages[id];
        }
      }
      return newMessages;
    case RECEIVE_MESSAGE_STATUS:
      messages[action.message.id].is_seen = action.message.is_seen;
      return messages;
    default:
      return state;
  }
};

export default messageReducer;
