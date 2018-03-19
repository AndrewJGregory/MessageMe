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

require 'test_helper'

class ChatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
