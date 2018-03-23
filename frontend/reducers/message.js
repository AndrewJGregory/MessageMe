import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from "../actions/message";

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message);
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    default:
      return state;
  }
};

export default messageReducer;
