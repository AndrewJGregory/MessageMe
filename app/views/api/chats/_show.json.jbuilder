messages.each do |message|
    json.set! message.id do
      json.extract! message, :content, :id, :chat_id, :user_id, :created_at
    end
end
