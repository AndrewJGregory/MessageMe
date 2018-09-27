class Api::ChatsController < ApplicationController
  def create
    @possible_chat = Chat.find_chat(chat_params[:user_sender_id], chat_params[:user_receiver_id])

    unless @possible_chat
      @possible_chat = Chat.new(user_id_one: chat_params[:user_sender_id], user_id_two: chat_params[:user_receiver_id])
      render json: @possible_chat.errors, status: 422 unless @possible_chat.save
    end
  end

  def show
    @messages = Chat.find(params[:id]).messages
  end

  private

  def chat_params
    params.require(:chat).permit(:user_sender_id, :user_receiver_id)
  end
end
