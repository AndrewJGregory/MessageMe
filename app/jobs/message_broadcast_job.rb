class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    sender_id = message.user_id
    sender_status = MessageStatus.find_by(message_id: message.id, user_id: sender_id)
    sender_status.update(is_seen: true)
    sender_chat = Chat.find_by(user_id_one: sender_id, user_id_two: sender_id)
    all_ids = [message.chat.user_id_one, message.chat.user_id_two]
    receiver_id = all_ids.reject { |id| id == sender_id }.first || sender_id
    receiver_chat = Chat.find_by(user_id_one: receiver_id, user_id_two: receiver_id)
    normalized_receiver_message = { message.id => message }
    user = User.find_by(id: sender_id)
    between_chat = message.chat
    receiver_message_status = MessageStatus.find_by(user_id: receiver_id, message_id: message.id)
    normalized_message_status = { receiver_message_status.id => { id: receiver_message_status.id, user_id: receiver_message_status.user_id, message_id: receiver_message_status.message_id, is_seen: receiver_message_status.is_seen }  }
    normalized_user = { sender_id => { id: user.id, username: user.username } }
    normalized_chat = { between_chat.id => between_chat }
    receiver_payload = { message: normalized_receiver_message, user: normalized_user, chat: normalized_chat, message_status: normalized_message_status }
    ChatChannel.broadcast_to(receiver_chat, receiver_payload)
  end
end
