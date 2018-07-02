import * as messageUtil from "../util/message";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const SEE_MESSAGE = "SEE_MESSAGE";

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  };
};

export const seeMessageFrontend = message => {
  return {
    type: SEE_MESSAGE,
    message
  };
};

export const createMessage = (
  content,
  user_sender_id,
  user_receiver_id
) => dispatch => {
  return messageUtil.createMessage(content, user_sender_id, user_receiver_id);
};

export const fetchMessages = chatId => dispatch => {
  return messageUtil.fetchMessages(chatId).then(messages => {
    dispatch(receiveMessages(messages));
    return messages;
  });
};

export const seeMessageBackend = message => dispatch => {
  return messageUtil.seeMessage(message).then(message => {
    dispatch(seeMessageFrontend(message));
    return message;
  });
};
