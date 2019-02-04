# == Schema Information
#
# Table name: archive_chats
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  chat_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  is_archived :boolean          default(FALSE)
#

require 'test_helper'

class ArchiveChatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
