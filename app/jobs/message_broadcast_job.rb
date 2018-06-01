class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message, chat_id)
    original_chat = Chat.find_by(id: chat_id)
    chat = message.chat
    ids = [chat.user_id_one, chat.user_id_two]
    ids.reject! { |id| id === message.user_id }
    # stream new message to OTHER user's chat with themself
    self_chat = Chat.find_by(user_id_one: ids.first, user_id_two: ids.first)
    normalized_message = { message.id => message }
    # other user needs to have the chat with themselves. 
    # so create chat with the users self after creation in model (instead of on click in front end)
    # THEN, broadcast more than the message:
    # the normalized_message's chat
    # the user info: of User.find_by(id: message.user_id)
    # dispatch appropiate actions in front end
    normalized_user = { message.user_id => User.find_by(id: message.user_id) }
    normalized_chat = { original_chat.id => original_chat }
    ChatChannel.broadcast_to(self_chat, { message: normalized_message, user: normalized_user, chat: normalized_chat } )
    ChatChannel.broadcast_to(original_chat, { message: normalized_message, user: normalized_user, chat: normalized_chat } )
  end
end
