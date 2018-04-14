import { combineReducers } from "redux";
import chats from "./chat";
import messages from "./message";
import users from "./users";

const entitiesReducer = combineReducers({
  chats,
  messages,
  users
});

export default entitiesReducer;
