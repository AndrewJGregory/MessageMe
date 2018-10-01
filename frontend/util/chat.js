export const createChat = (user_sender_id, user_receiver_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/chats",
    data: { chat: { user_sender_id, user_receiver_id } }
  });
};

export const archiveChat = (chatId, user_id, status) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/chats/${chatId}`,
    data: { chat: { user_id, status } }
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
      id => id != userId && id != chatId && Number(id) === id
    )[0];
    component.props.archiveChat(chatId, currentUserId, false);
  });
};
