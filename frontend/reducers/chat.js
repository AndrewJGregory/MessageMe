import { RECEIVE_CHAT } from "../actions/chat";
import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";
import { RECEIVE_MESSAGE_PAYLOAD } from "../actions/message";

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.chat);
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.chats);
    case RECEIVE_MESSAGE_PAYLOAD:
      return Object.assign({}, state, action.payload.chat);
    default:
      return state;
  }
};
export default chatReducer;
