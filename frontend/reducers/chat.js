import { RECEIVE_CHAT } from "../actions/chat";
import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.chat);
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.chats);
    default:
      return state;
  }
};
export default chatReducer;
