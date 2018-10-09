json.users do
  @most_recently_messaged_users.each do |user|
    json.partial! 'api/users/show', user: user
  end
end

json.chats do
  ids = @most_recent_chats.map(&:id)
  archive_chats = ArchiveChat.where(user_id: current_user.id)
  hash = {}
  archive_chats.each { |archive_chat| hash[archive_chat.chat_id] = archive_chat.is_archived if ids.include?(archive_chat.chat_id) }
  @most_recent_chats.each do |chat|
    json.partial! 'api/chats/create', chat: chat, status: hash[chat.id]
  end
end

if @most_recent_messages.empty?
  json.messages({})
else
  json.messages do
    @most_recent_messages.each do |message|
      json.partial! 'api/messages/create', message: message
    end
  end
end
