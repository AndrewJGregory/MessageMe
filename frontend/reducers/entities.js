import chats from "./chat";
import { combineReducers } from "redux";
import messages from "./message";
import users from "./users";

const entitiesReducer = combineReducers({
  chats,
  messages,
  users,
});

export default entitiesReducer;
