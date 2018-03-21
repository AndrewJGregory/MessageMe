export const createChat = (user_sender_id, user_receiver_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/chats",
    data: { chat: { user_sender_id, user_receiver_id } }
  });
};
