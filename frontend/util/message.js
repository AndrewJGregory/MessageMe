export const createMessage = (content, user_sender_id, user_receiver_id) => {
  return $.ajax({
    url: "/api/messages",
    method: "POST",
    data: { message: { content, user_sender_id, user_receiver_id } }
  });
};
