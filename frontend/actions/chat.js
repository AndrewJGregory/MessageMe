export const RECEIVE_CHAT = "RECEIVE_CHAT";
import * as chatUtil from "../util/chat";

export const receiveChat = chat => {
  return {
    type: RECEIVE_CHAT,
    chat
  };
};

export const createChat = (userIdOne, userIdTwo) => dispatch => {
  return chatUtil.createChat(userIdOne, userIdTwo).then(chat => {
    dispatch(receiveChat(chat));
    return chat;
  });
};
