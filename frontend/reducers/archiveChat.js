import { RECEIVE_USER_SIGN_IN_DATA } from "../actions/user";

const archiveChatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.archive_chats);
    default:
      return state;
      break;
  }
};

export default archiveChatReducer;
