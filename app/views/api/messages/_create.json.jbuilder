json.set! message.id do
  json.extract! message, :id, :content, :user_id, :chat_id, :created_at
  json.is_seen true
end
