class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat = Chat.find_by(id: params[:chatId])
    stream_for @chat
  end

  def received(data)
    ChatChannel.broadcast_to(@chat, { message: @message })
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
