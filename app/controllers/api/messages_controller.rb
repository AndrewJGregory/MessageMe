class Api::MessagesController < ApplicationController
  def create
    user_id = message_params[:user_sender_id]
    @chat = Chat.find_chat(message_params[:user_sender_id], message_params[:user_receiver_id])
    content = message_params[:content]
    @message = Message.new(user_id: user_id, chat_id: @chat.id, content: content)
    if @message.save
      render 'api/messages/create'
    else
      render json: @message.errors, status: 422
    end
  end

  def update
    @message = Message.find(params[:id])
    @message.is_seen = message_params[:status]
    @message.save!
    render 'api/messages/update'
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_sender_id, :user_receiver_id, :status)
  end
end
