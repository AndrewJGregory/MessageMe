import { RECEIVE_MESSAGE } from "../actions/message";

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, state, action.message);
    default:
      return state;
  }
};

export default messageReducer;
