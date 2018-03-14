class Api::SearchesController < ApplicationController
  def create
    query = search_params['query'].downcase
    @users = User.where('lower(username) LIKE ?', "#{query}%")
  end

  def search_params
    params.require(:search).permit(:query)
  end
end
