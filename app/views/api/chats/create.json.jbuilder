json.set! @possible_chat.id do
  json.extract! @possible_chat, :user_id_one, :user_id_two, :id
end
