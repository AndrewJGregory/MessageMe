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

  def get_messages(user_id)
    Message.find_by_sql("SELECT * FROM chats INNER JOIN messages ON chat_id = #{self.id} AND user_id = #{user_id}")
  end

  def self.find_chat(user_id_one, user_id_two)
    result = Chat.find_by_sql("SELECT * FROM chats WHERE user_id_one = #{user_id_one} AND user_id_two = #{user_id_two}")
    result = Chat.find_by_sql("SELECT * FROM chats WHERE user_id_one = #{user_id_two} AND user_id_two = #{user_id_one}") if result.empty?
    result.first
  end
end
