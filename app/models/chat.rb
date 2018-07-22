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
    result = Chat.where("user_id_one = ? AND user_id_two = ?", user_id_one, user_id_two)
    result = Chat.where("user_id_one = ? AND user_id_two = ?", user_id_two, user_id_one) if result.empty?
    result.first
  end
  
  def self.find_recent_messages(current_user_id)
    all_current_user_chats = Chat.where(user_id_one: current_user_id).or(Chat.where(user_id_two: current_user_id))
    recent_messages = all_current_user_chats.map { |chat| chat.messages.reset.sort { |message1, message2| message1.id <=> message2.id } }.map(&:last).reject(&:nil?)
    recent_messages
  end 

  def self.find_recently_messaged_users(current_user_id, recent_messages)
    most_recent_user_ids = recent_messages.reduce([]) do |user_ids, message| 
      other_user_id = message.chat.user_id_one == current_user_id ? message.chat.user_id_two : message.chat.user_id_one
      user_ids << other_user_id
      user_ids
    end 
    User.find(most_recent_user_ids)
  end 
end
