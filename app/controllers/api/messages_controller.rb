class Api::MessagesController < ApplicationController
  def create
    user_sender_id, user_receiver_id, content = message_params.values_at(:user_sender_id, :user_receiver_id, :content)
    @chat = Chat.find_chat(user_sender_id, user_receiver_id)
    @message = Message.new(user_id: user_sender_id, chat_id: @chat.id, content: content)
    if @message.save
      sender_status = MessageStatus.find_by(message_id: @message.id, user_id: user_sender_id)
      receiver_status = MessageStatus.find_by(message_id: @message.id, user_id: user_receiver_id)
      @statuses = [sender_status, receiver_status]
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
