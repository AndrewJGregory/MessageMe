# == Schema Information
#
# Table name: messages
#
#  id         :bigint(8)        not null, primary key
#  content    :text             not null
#  user_id    :integer          not null
#  chat_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :content, :user_id, :chat_id, presence: true
  belongs_to :chat
  belongs_to :user
  has_many :message_statuses
  alias_attribute :statuses, :message_statuses
  after_save :broadcast_message

  def broadcast_message
    MessageBroadcastJob.perform_now(self)
  end

  def duplicate
    duped_message = {}
    Message.column_names.each do |col|
      duped_message[col.to_s] = self[col.to_s]
    end
    duped_message
  end
end
