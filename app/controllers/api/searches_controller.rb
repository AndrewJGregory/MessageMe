class Api::SearchesController < ApplicationController
  def create
    query = search_params['query'].downcase
    @users = User.where('lower(username) LIKE ?', "%#{query}%")
    @chats = @users.reduce([]) do |chats, user|
      chats << Chat.find_chat(user.id, current_user.id)
      chats
    end
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
