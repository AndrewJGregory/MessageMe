json.users do
  json.partial! 'api/users/show', user: @user, isCurrentUser: @isCurrentUser
end 