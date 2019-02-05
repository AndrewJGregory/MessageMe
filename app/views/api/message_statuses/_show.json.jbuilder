json.set! status.id do
  json.extract! status, :id, :user_id, :message_id, :is_seen
end