class Api::ChatsController < ApplicationController
  def create
    @possible_chat = Chat.find_chat(chat_params[:user_sender_id], chat_params[:user_receiver_id])

    if !@possible_chat
      @possible_chat = Chat.new(user_id_one: chat_params[:user_sender_id], user_id_two: chat_params[:user_receiver_id])
      if !@possible_chat.save
        render json: @possible_chat.errors, status: 422
      end
    end
  end

  def show
    chat = Chat.find(params[:id])
    @user_sender_id = chat_params[:user_sender_id]
    @user_receiver_id = chat_params[:user_receiver_id]
    @sender_messages = chat.get_messages(@user_sender_id)
    @receiver_messages = chat.get_messages(@user_receiver_id)
  end

  private
  def chat_params
    params.require(:chat).permit(:user_sender_id, :user_receiver_id)
  end
end
