import { RECEIVE_CHAT } from "../actions/chat";

const chatReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CHAT:
      return Object.assign({}, state, action.chat);
    default:
      return state;
  }
};
export default chatReducer;
