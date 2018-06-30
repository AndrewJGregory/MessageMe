json.set! message.id do
  json.extract! message, :id, :content, :user_id, :chat_id, :is_seen, :created_at
end
