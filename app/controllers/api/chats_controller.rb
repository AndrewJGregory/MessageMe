class Api::ChatsController < ApplicationController
  def create
    @chat = Chat.find_chat(chat_params[:user_sender_id], chat_params[:user_receiver_id])
    @status = ArchiveChat.find_by(user_id: current_user.id, chat_id: @chat.id).is_archived if @chat

    unless @chat
      @chat = Chat.new(user_id_one: chat_params[:user_sender_id], user_id_two: chat_params[:user_receiver_id])
      @status = false
      render json: @chat.errors, status: 422 unless @chat.save
    end
  end

  def show
    @messages = Chat.find(params[:id]).messages
  end

  def update
    archive_chat = User.find(chat_params[:user_id]).archive_chats.find_by(chat_id: params[:id])
    archive_chat.is_archived = chat_params[:status]
    archive_chat.save!
    @status = ActiveModel::Type::Boolean.new.cast(chat_params[:status])
    # converts "true" to true
    @chat = Chat.find(params[:id])
    render 'api/chats/create'
  end
  
  def destroy
    @chat = Chat.find_by(id: params[:id])
    @chat.destroy if @chat 
  end

  private

  def chat_params
    params.require(:chat).permit(:user_sender_id, :user_receiver_id, :user_id, :status)
  end
end
