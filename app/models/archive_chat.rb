# == Schema Information
#
# Table name: archive_chats
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  chat_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  is_archived :boolean          default(FALSE)
#

class ArchiveChat < ApplicationRecord
  validates :user_id, :chat_id, presence: true
  validates_uniqueness_of :user_id, scope: [:chat_id]
  
  belongs_to :chat
  belongs_to :user
end
