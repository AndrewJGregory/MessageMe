import { RECEIVE_CHAT } from "../actions/chat";
import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const archiveChatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.archive_chats);
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.payload.archive_chat);
    default:
      return state;
      break;
  }
};

export default archiveChatReducer;
