class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/sessions/create'
    else
      render json: @user.errors.messages, status: 422
    end
  end

  def show 
    @user = current_user
    @self_chat = Chat.find_by(user_id_one: @user.id, user_id_two: @user.id)
    if @user
      @most_recent_messages = Chat.find_recent_messages(@user.id)
      @most_recently_messaged_users = Chat.find_recently_messaged_users(@user.id, @most_recent_messages).push(@user)
      @most_recent_chats = @most_recent_messages.map(&:chat)
      render 'api/users/show'
    else 
      render json: {}
    end 
  end 
  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
