import { RECEIVE_CHAT, REMOVE_CHAT } from "../actions/chat";
import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";
import { RECEIVE_MESSAGE_PAYLOAD } from "../actions/message";
import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.chat);
    case RECEIVE_USER_SIGN_IN_DATA:
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, action.payload.chats);
    case RECEIVE_MESSAGE_PAYLOAD:
      return Object.assign({}, state, action.payload.chat);
    case REMOVE_CHAT:
      const newState = Object.assign({}, state);
      delete newState[action.payload.chat_id];
      return newState;
    case RECEIVE_USER_SEARCH_RESULTS:
    default:
      return state;
  }
};
export default chatReducer;
