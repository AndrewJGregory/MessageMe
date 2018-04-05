class Api::MessagesController < ApplicationController

  def create
    user_id = message_params[:user_sender_id]
    @chat = Chat.find_chat(message_params[:user_sender_id], message_params[:user_receiver_id])
    content = message_params[:content]
    @message = Message.new(user_id: user_id, chat_id: @chat.id, content: content)
    if @message.save
      @message = { @message.id => { content: @message.content, id: @message.id, chat_id: @message.chat_id, user_id: @message.user_id, created_at: @message.created_at } }
      ChatChannel.broadcast_to(@chat, { message: @message })
      render json: {}
    else 
      render json: @message.errors, status: 422
    end 
  end

  private
  def message_params
    params.require(:message).permit(:content, :user_sender_id, :user_receiver_id)
  end
end