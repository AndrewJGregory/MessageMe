import { RECEIVE_CHAT } from "../actions/chat";
import { RECEIVE_CURRENT_USER } from "../actions/session";

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.chat);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, action.chats);
    default:
      return state;
  }
};
export default chatReducer;
