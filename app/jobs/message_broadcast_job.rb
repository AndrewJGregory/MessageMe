class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    sender_id = message.user_id
    sender_status = MessageStatus.find_by(message_id: message.id, user_id: sender_id)
    sender_status.update(is_seen: true)
    sender_chat = Chat.find_by(user_id_one: sender_id, user_id_two: sender_id)
    all_ids = [message.chat.user_id_one, message.chat.user_id_two]
    sendee_id = all_ids.reject { |id| id == sender_id }.first || sender_id
    sendee_chat = Chat.find_by(user_id_one: sendee_id, user_id_two: sendee_id)
    normalized_sendee_message = { message.id => message }
    user = User.find_by(id: sender_id)
    between_chat = message.chat
    sendee_message_status = MessageStatus.find_by(user_id: sendee_id, message_id: message.id)
    normalized_message_status = { sendee_message_status.id => { id: sendee_message_status.id, user_id: sendee_message_status.user_id, message_id: sendee_message_status.message_id, is_seen: sendee_message_status.is_seen }  }
    normalized_user = { sender_id => { id: user.id, username: user.username } }
    normalized_chat = { between_chat.id => between_chat }
    sendee_payload = { message: normalized_sendee_message, user: normalized_user, chat: normalized_chat, message_status: normalized_message_status }
    ChatChannel.broadcast_to(sendee_chat, sendee_payload)
  end
end
