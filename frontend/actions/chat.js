export const RECEIVE_CHAT = "RECEIVE_CHAT";
import * as chatUtil from "../util/chat";
import { fetchMessages } from "./message";

export const receiveChat = chat => {
  return {
    type: RECEIVE_CHAT,
    chat,
  };
};

export const createChatAndFetchMessages = otherUserId => (
  dispatch,
  getState,
) => {
  const state = getState();
  const currentUserId = state.session.currentUser.id;
  return dispatch(createChat(currentUserId, otherUserId)).then(chat => {
    let chatId = Object.keys(chat);
    dispatch(fetchMessages(chatId));
    return chat;
  });
};

export const createChat = (userIdOne, userIdTwo) => dispatch => {
  return chatUtil.createChat(userIdOne, userIdTwo).then(chat => {
    dispatch(receiveChat(chat));
    return chat;
  });
};

export const archiveChat = (chatId, userId, status) => dispatch => {
  return chatUtil.archiveChat(chatId, userId, status).then(chat => {
    dispatch(receiveChat(chat));
    return chat;
  });
};
