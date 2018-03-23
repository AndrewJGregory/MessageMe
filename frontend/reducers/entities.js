import { combineReducers } from "redux";
import chats from "./chat";
import messages from "./message";

const entitiesReducer = combineReducers({
  chats,
  messages
});

export default entitiesReducer;
