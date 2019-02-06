require 'test_helper'

class MessageStatusesControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get message_statuses_update_url
    assert_response :success
  end

end
