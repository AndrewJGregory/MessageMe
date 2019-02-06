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

export const receiveMessage = payload => {
  return {
    type: RECEIVE_MESSAGE,
    payload,
  };
};

const receiveMessages = payload => {
  return {
    type: RECEIVE_MESSAGES,
    payload,
  };
};

export const recieveMessageStatus = messageStatus => {
  return {
    type: RECEIVE_MESSAGE_STATUS,
    messageStatus,
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
  return messageUtil.fetchMessages(chatId).then(payload => {
    dispatch(receiveMessages(payload));
  });
};

export const setMessageStatus = (messageStatusId, status) => dispatch => {
  return messageUtil
    .setMessageStatus(messageStatusId, status)
    .then(messageStatus => {
      dispatch(recieveMessageStatus(messageStatus));
    });
};

export const redirectToChat = userId => (dispatch, getState) => {
  const state = getState();
  createChatAndFetchMessages(userId);
  const mostRecentMessage = findMostRecentMessage(state, userId);
  if (mostRecentMessage.id) setMessageStatus(mostRecentMessage.id, true);
};
