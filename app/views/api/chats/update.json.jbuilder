json.chat do 
  json.partial! 'api/chats/create', chat: @chat
end
  
json.archive_chat do 
  json.partial! 'api/archive_chats/show', archive_chat: @archive_chat
end 