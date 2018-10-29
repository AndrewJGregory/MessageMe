json.users do 
  @users.each do |user|
    json.partial! 'api/users/show', user: user
  end
end

statuses = ArchiveChat.find_statuses(@chats, current_user.id)

json.chats do 
  @chats.each do |chat|
    json.partial! 'api/chats/create', chat: chat, status: statuses[chat.id]
  end 
end
