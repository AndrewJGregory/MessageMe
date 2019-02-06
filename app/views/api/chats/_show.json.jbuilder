json.messages do 
  messages.each do |message|
    json.partial! 'api/messages/create', message: message
  end
end

json.message_statuses do 
  statuses.each do |status|
    json.partial! 'api/message_statuses/show', status: status
  end 
end