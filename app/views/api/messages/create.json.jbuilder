json.message do
  json.partial! 'api/messages/create', message: @message
end 

json.message_statuses do
  @statuses.each do |status|
    json.partial! 'api/message_statuses/show', status: status
  end
end