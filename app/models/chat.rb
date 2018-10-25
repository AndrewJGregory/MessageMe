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
  has_many :messages,
  dependent: :destroy

  has_many :archive_chats,
  dependent: :destroy

  after_create_commit do 
    ArchiveChat.create(user_id: self.user_id_one, chat_id: self.id)
    ArchiveChat.create(user_id: self.user_id_two, chat_id: self.id)
  end

  def self.find_chat(user_id_one, user_id_two)
    result = Chat.where('user_id_one = ? AND user_id_two = ?', user_id_one, user_id_two)
    result = Chat.where('user_id_one = ? AND user_id_two = ?', user_id_two, user_id_one) if result.empty?
    result.first
  end

  def self.find_recent_messages(current_user_id)
    recent_messages = []
    [{ user_id_one: current_user_id }, { user_id_two: current_user_id }].each do |hash|
      Chat.includes(:messages).where(hash).each do |chat|
        last_message = chat.messages.sort_by(&:id).last
        recent_messages << last_message unless last_message.nil?
      end
    end
    recent_messages
  end

  def self.find_recently_messaged_users(current_user_id, recent_messages)
    most_recent_user_ids = recent_messages.each_with_object([]) do |message, user_ids|
      other_user_id = message.chat.user_id_one == current_user_id ? message.chat.user_id_two : message.chat.user_id_one
      user_ids << other_user_id
    end
    User.find(most_recent_user_ids)
  end
end
