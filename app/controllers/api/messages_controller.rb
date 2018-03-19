class Api::MessagesController < ApplicationController

  def create
    user_id = message_params[:user_sender_id]
    chat_id = Chat.find_chat(message_params[:user_sender_id], message_params[:user_receiver_id]).id
    content = message_params[:content]
    @message = Message.new(user_id: user_id, chat_id: chat_id, content: content)
    if !@message.save
      render json: @message.errors, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:content, :user_sender_id, :user_receiver_id)
  end
end
