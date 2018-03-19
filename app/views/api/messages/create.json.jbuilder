json.set! @message.id do
  json.extract! @message, :id, :content, :user_id
end
