# == Schema Information
#
# Table name: message_statuses
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  message_id :integer          not null
#  is_seen    :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class MessageStatusTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
