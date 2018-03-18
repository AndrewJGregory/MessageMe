# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

used_names = []
new_name = nil

User.create!(username: 'andrew', password: 'password')
10.times do
  new_name = Faker::Seinfeld.character
  while used_names.include?(new_name) do
    new_name = Faker::Seinfeld.character
  end
  User.create!(username: new_name, password: 'password')
  used_names.push(new_name)
end
