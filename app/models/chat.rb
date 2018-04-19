 # == Schema Information
#
# Table name: chats
#
#  id          :integer          not null, primary key
#  user_id_one :integer          not null
#  user_id_two :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Chat < ApplicationRecord
  validates_uniqueness_of :user_id_one, scope: [:user_id_two]
  has_many :messages
  
  def self.find_chat(user_id_one, user_id_two)
    result = Chat.find_by_sql("SELECT * FROM chats WHERE user_id_one = #{user_id_one} AND user_id_two = #{user_id_two}")
    result = Chat.find_by_sql("SELECT * FROM chats WHERE user_id_one = #{user_id_two} AND user_id_two = #{user_id_one}") if result.empty?
    result.first
  end
  
  def self.find_recent_messages(current_user_id)
    all_current_user_chats = Chat.all.select { |chat| chat.user_id_one == current_user_id || chat.user_id_two == current_user_id }
    recent_messages = all_current_user_chats.map { |chat| chat.messages.sort { |message1, message2| message1.id <=> message2.id } }.map(&:last).reject(&:nil?)
    recent_messages
  end 

  def self.find_recently_messaged_users(current_user_id)
    recent_messages = self.find_recent_messages(current_user_id)
    most_recent_users = recent_messages.reduce([]) do |users, message| 
      other_user_id = message.chat.user_id_one == current_user_id ? message.chat.user_id_two : message.chat.user_id_one
      users << User.find(other_user_id)
      users
    end 
    most_recent_users
  end 

  def self.find_most_recent_chats(current_user_id)
    self.find_recent_messages(current_user_id).map(&:chat)
  end 
end
