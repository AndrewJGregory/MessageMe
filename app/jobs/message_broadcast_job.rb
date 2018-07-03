class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    sender_id = message.user_id
    sender_chat = Chat.find_by(user_id_one: sender_id, user_id_two: sender_id)
    all_ids = [message.chat.user_id_one, message.chat.user_id_two]
    sendee_id = all_ids.reject { |id| id == sender_id }.first
    sendee_chat = Chat.find_by(user_id_one: sendee_id, user_id_two: sendee_id)
    duped_message = message.duplicate
    duped_message["is_seen"] = true;
    normalized_sender_message = { message.id => duped_message }
    normalized_sendee_message = { message.id => message }
    user = User.find_by(id: sender_id)
    normalized_user = { sender_id => { id: user.id, username: user.username } }
    normalized_chat = { sendee_chat.id => sendee_chat }
    sender_payload = { message: normalized_sender_message, user: normalized_user, chat: normalized_chat }
    sendee_payload = { message: normalized_sendee_message, user: normalized_user, chat: normalized_chat }
    ChatChannel.broadcast_to(sender_chat, sender_payload)
    ChatChannel.broadcast_to(sendee_chat, sendee_payload)
  end
end