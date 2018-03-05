class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:user][:username])
    if @user.valid_password?(params[:user][:password])
      sign_in(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user
      sign_out(current_user)
      render json: {}
    else
      render json: ['Nobody is logged in'], status: 422
    end
  end
end
