other_user_id = @chat.user_id_one == current_user.id ? @chat.user_id_two : @chat.user_id_one
json.other_user_id other_user_id
json.chat_id @chat.id