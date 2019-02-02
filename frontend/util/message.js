import _fetch from "./fetch";
import { findChatId } from "../util/chat";

export const createMessage = (content, user_sender_id, user_receiver_id) => {
  return _fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify({
      message: { content, user_sender_id, user_receiver_id },
    }),
  });
};

export const fetchMessages = chat_id => {
  return _fetch(`/api/chats/${chat_id}`);
};

export const setMessageStatus = (messageId, status) => {
  return _fetch(`/api/messages/${messageId}`, {
    method: "PATCH",
    body: JSON.stringify({ message: { status } }),
  });
};

export const findMostRecentMessage = (state, userId) => {
  const currentUserId = state.session.currentUser.id;
  const chatId = findChatId(state, userId, currentUserId);
  const messages = findMessages(state, userId, currentUserId, chatId);
  sortByDate(messages);
  const mostRecentMessage = messages[messages.length - 1] || {};
  return mostRecentMessage;
};

export const findMessages = (state, userId, currentUserId, chatId) => {
  let messages = [];
  let newMessage = null;
  Object.values(state.entities.messages).forEach(message => {
    newMessage = null;
    if (message.chat_id == chatId && message.user_id == currentUserId) {
      newMessage = Object.assign({}, message, {
        isCurrentUserMessage: true,
      });
    } else if (message.chat_id == chatId && message.user_id == userId)
      newMessage = Object.assign({}, message, {
        isCurrentUserMessage: false,
      });
    if (newMessage) messages.push(newMessage);
  });
  return messages;
};

export const sortByDate = messages => {
  return messages.sort((messageOne, messageTwo) =>
    messageOne.id < messageTwo.id ? -1 : 1,
  );
};

export const sortByMostRecentlyMessaged = (state, users) => {
  const currentUserId = state.session.currentUser.id;
  users.sort((userOne, userTwo) => {
    if (userOne.id === userTwo.id) return 0;
    const userOneChatId = findChatId(state, userOne.id, currentUserId);
    const userOneMessages = findMessages(
      state,
      userOne.id,
      currentUserId,
      userOneChatId,
    );

    const userTwoChatId = findChatId(state, userTwo.id, currentUserId);
    const userTwoMessages = findMessages(
      state,
      userTwo.id,
      currentUserId,
      userTwoChatId,
    );

    sortByDate(userOneMessages);
    sortByDate(userTwoMessages);

    if (userOneMessages.length === 0) return 1;
    if (userTwoMessages.length === 0) return -1;
    return userOneMessages[userOneMessages.length - 1].id <
      userTwoMessages[userTwoMessages.length - 1].id
      ? 1
      : -1;
  });
};
