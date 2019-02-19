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
    most_recent_message = @messages.reduce { |most_recent_message, message| most_recent_message.id > message.id ? most_recent_message : message }
    @most_recent_message_statuses = most_recent_message.nil? ? [] : most_recent_message.statuses
  end

  def update
    @chat = Chat.find(params[:id])
    @archive_chat = @chat.archive_chats.find { |archive_chat| archive_chat.user_id == chat_params[:user_id] }
    @archive_chat.update(is_archived: chat_params[:status])
    render 'api/chats/update'
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
