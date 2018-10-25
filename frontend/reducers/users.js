import { RECEIVE_USER_SEARCH_RESULTS } from "../actions/search";
import { RECEIVE_USER_SIGN_IN_DATA, RECEIVE_USER } from "../actions/user";
import { RECEIVE_MESSAGE_PAYLOAD } from "../actions/message";
import { REMOVE_CHAT } from "../actions/chat";

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER_SIGN_IN_DATA:
      return Object.assign({}, state, action.payload.users);
    case RECEIVE_USER_SEARCH_RESULTS:
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state, action.user);
    case RECEIVE_MESSAGE_PAYLOAD:
      return Object.assign({}, state, action.payload.user);
    case REMOVE_CHAT:
      const newState = Object.assign({}, state);
      delete newState[action.payload.other_user_id];
      return newState;
    default:
      return state;
  }
};
