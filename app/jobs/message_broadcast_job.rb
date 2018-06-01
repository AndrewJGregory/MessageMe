class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, chat_id)
    @chat = Chat.find_by(id: chat_id )
    normalized_message = { message.id => message }
    ChatChannel.broadcast_to(@chat, { message: normalized_message })
  end
end
