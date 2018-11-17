import _fetch from "./fetch";

export const createChat = (user_sender_id, user_receiver_id) => {
  return _fetch("/api/chats", {
    method: "POST",
    body: JSON.stringify({ chat: { user_sender_id, user_receiver_id } }),
  });
};

export const archiveChat = (chatId, user_id, status) => {
  return _fetch(`/api/chats/${chatId}`, {
    method: "PATCH",
    body: JSON.stringify({ chat: { user_id, status } }),
  });
};

export const deleteChat = id => {
  return _fetch(`/api/chats/${id}`, {
    method: "DELETE",
  });
};

export const findChatId = (state, userId, currentUserId) => {
  let chatId = 0;
  Object.values(state.entities.chats).forEach(chat => {
    if (
      (chat.user_id_one == userId && chat.user_id_two == currentUserId) ||
      (chat.user_id_one == currentUserId && chat.user_id_two == userId)
    ) {
      chatId = chat.id;
    }
  });
  return chatId;
};

export const redirectToChat = (component, userId) => {
  component.props.history.push(`/messages/${userId}`);
  component.props.createChatAndFetchMessages(userId).then(chat => {
    const chatId = Object.keys(chat)[0];
    const currentUserId = Object.values(Object.values(chat)[0]).filter(
      id => id != userId && id != chatId && Number(id) === id,
    )[0];
    component.props.archiveChat(chatId, currentUserId, false);
  });
};
