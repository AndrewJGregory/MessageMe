json.set! user.id do 
  json.extract! user, :id, :username
  json.isCurrentUser true if isCurrentUser
end 
