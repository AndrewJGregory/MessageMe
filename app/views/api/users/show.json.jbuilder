json.users do
  @isCurrentUser = true
  json.partial! 'api/users/show', user: @user, isCurrentUser: @isCurrentUser
end 