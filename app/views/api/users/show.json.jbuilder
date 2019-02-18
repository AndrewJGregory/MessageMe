json.users do
  @most_recently_messaged_users.each do |user|
    json.partial! 'api/users/show', user: user
  end
end

json.chats do
  @most_recent_chats.each do |chat|
    json.partial! 'api/chats/create', chat: chat
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

json.message_statuses do 
  @message_statuses.each do |status|
    json.partial! 'api/message_statuses/show', status: status
  end
end

json.archive_chats do 
  @archive_chats.each do |archive_chat|
    json.partial! 'api/archive_chats/show', archive_chat: archive_chat
  end
end 
