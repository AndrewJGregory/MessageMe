# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Message.destroy_all
Chat.destroy_all

used_names = []
new_name = nil

User.create!(username: 'andrew', password: 'password')
20.times do
  new_name = Faker::Name.first_name
  while used_names.include?(new_name)
    new_name = Faker::Name.first_name
  end
  User.create!(username: new_name, password: 'password')
  used_names.push(new_name)
end

u1 = User.first
u2 = User.second  
c1 = Chat.create!(user_id_one: u1.id, user_id_two: u2.id)