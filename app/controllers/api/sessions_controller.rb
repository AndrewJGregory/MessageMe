class Api::SessionsController < ApplicationController
  def create

    @user = User.find_by_credentials(
      params[:user][:username].downcase,
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
