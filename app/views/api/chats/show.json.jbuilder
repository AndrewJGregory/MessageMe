json.set! @user_sender_id do
  json.partial! 'api/chats/show', messages: @sender_messages
end

json.set! @user_receiver_id do
  json.partial! 'api/chats/show', messages: @receiver_messages
end
