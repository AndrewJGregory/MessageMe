class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    original_chat = message.chat
    all_ids = [original_chat.user_id_one, original_chat.user_id_two]
    other_user_id = all_ids.reject { |id| id == message.user_id }.first
    self_chat = Chat.find_by(user_id_one: other_user_id, user_id_two: other_user_id)
    normalized_message = { message.id => message }
    normalized_user = { message.user_id => User.find_by(id: message.user_id) }
    normalized_chat = { original_chat.id => original_chat }
    payload = { message: normalized_message, user: normalized_user, chat: normalized_chat }
    ChatChannel.broadcast_to(self_chat, payload)
    ChatChannel.broadcast_to(original_chat, payload)
  end
end
