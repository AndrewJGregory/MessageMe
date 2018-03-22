import { combineReducers } from "redux";
import chat from "./chat";
import message from "./message";

const entitiesReducer = combineReducers({
  chat,
  message
});

export default entitiesReducer;
