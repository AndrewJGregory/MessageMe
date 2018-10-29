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

  def self.find_statuses(chats, current_user_id)
    ids = chats.map(&:id)
    archive_chats = ArchiveChat.where(user_id: current_user_id)
    statuses = {}
    archive_chats.each { |archive_chat| statuses[archive_chat.chat_id] = archive_chat.is_archived if ids.include?(archive_chat.chat_id) }
    statuses
  end
end
