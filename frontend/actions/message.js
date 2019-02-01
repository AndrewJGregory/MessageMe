import * as messageUtil from "../util/message";

import { createChatAndFetchMessages } from "../actions/chat";
import { findMostRecentMessage } from "../util/message";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE_STATUS = "RECEIVE_MESSAGE_STATUS";
export const RECEIVE_MESSAGE_PAYLOAD = "RECEIVE_MESSAGE_PAYLOAD";

export const receiveMessagePayload = payload => {
  return {
    type: RECEIVE_MESSAGE_PAYLOAD,
    payload,
  };
};
export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  };
};

const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  };
};

export const recieveMessageStatus = message => {
  return {
    type: RECEIVE_MESSAGE_STATUS,
    message,
  };
};

export const createMessage = (
  content,
  user_sender_id,
  user_receiver_id,
) => dispatch => {
  return messageUtil
    .createMessage(content, user_sender_id, user_receiver_id)
    .then(message => {
      return dispatch(receiveMessage(message));
    });
};

export const fetchMessages = chatId => dispatch => {
  return messageUtil.fetchMessages(chatId).then(messages => {
    dispatch(receiveMessages(messages));
    return messages;
  });
};

export const seeMessageBackend = message => dispatch => {
  return messageUtil.seeMessage(message).then(message => {
    dispatch(recieveMessageStatus(message));
    return message;
  });
};

export const redirectToChat = userId => (dispatch, getState) => {
  const state = getState();
  createChatAndFetchMessages(userId);
  const mostRecentMessage = findMostRecentMessage(state, userId);
  if (mostRecentMessage.id) seeMessageBackend(mostRecentMessage);
};
