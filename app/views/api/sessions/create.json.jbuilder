json.users do 
  @most_recently_messaged_users.each do |user|
    @isCurrentUser = (user.id == current_user.id)
    json.partial! 'api/users/show', user: user, isCurrentUser: @isCurrentUser
  end 
end 

json.chats do 
  @most_recent_chats.each do |chat|
    json.partial! 'api/chats/create', chat: chat 
  end 
end 

json.messages do 
  @most_recent_messages.each do |message|
    json.partial! 'api/messages/create', message: message
  end 
end 