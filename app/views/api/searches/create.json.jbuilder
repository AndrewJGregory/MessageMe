@users.each do |user|
  json.partial! 'api/users/show', user: user, isCurrentUser: @isCurrentUser
end
