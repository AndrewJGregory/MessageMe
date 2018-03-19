# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
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

end
