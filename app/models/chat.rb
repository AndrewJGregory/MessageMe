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
  validates_uniqueness_of :user_id_one, :scope => [:user_id_two]

  def get_messages(user)
    user_id = (self.user_id_one == user.id ? self.user_id_one : self.user_id_two)
    Message.find_by_sql("SELECT * FROM messages INNER JOIN chats ON chat_id = #{self.id} AND user_id = #{user_id}")
  end
end
