json.set! chat.id do
  json.extract! chat, :user_id_one, :user_id_two, :id
  json.is_archived status
end
