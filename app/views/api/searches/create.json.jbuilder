@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/show', user: user
  end
end
