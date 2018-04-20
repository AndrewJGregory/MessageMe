class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    errors = {}
    if params[:user][:username].empty?
      errors[:username] = 'Please enter your username.'
    end
    
    if params[:user][:password].empty?
      errors[:password] = 'Please enter your password.'
    end
    
    if @user
      login(@user)
      @most_recently_messaged_users = Chat.find_recently_messaged_users(@user.id).push(@user)
      @most_recent_chats = Chat.find_most_recent_chats(@user.id)
      @most_recent_messages = Chat.find_recent_messages(@user.id)
      render 'api/sessions/create'
    else
      errors[:credentials] = 'Incorrect username or password.'
      render json: errors, status: 422
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['Nobody is logged in'], status: 422
    end
  end
end
