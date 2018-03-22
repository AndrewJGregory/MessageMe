import * as messageUtil from "../util/message";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

export const createMessage = (
  content,
  user_sender_id,
  user_receiver_id
) => dispatch => {
  return messageUtil
    .createMessage(content, user_sender_id, user_receiver_id)
    .then(message => {
      dispatch(receiveMessage(message));
      return message;
    });
};
