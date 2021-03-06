import archiveChats from "./archiveChat";
import chats from "./chat";
import { combineReducers } from "redux";
import messageStatuses from "./messageStatus";
import messages from "./message";
import users from "./users";

const entitiesReducer = combineReducers({
  chats,
  messages,
  users,
  messageStatuses,
  archiveChats,
});

export default entitiesReducer;
