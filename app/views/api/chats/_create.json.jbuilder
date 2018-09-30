current_user_id = current_user.id
status_hash = {}
status_hash[current_user_id] = status
json.set! chat.id do
  json.extract! chat, :user_id_one, :user_id_two, :id
  json.isArchived status_hash
end
