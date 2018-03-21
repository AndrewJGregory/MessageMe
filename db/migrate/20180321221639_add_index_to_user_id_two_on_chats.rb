class AddIndexToUserIdTwoOnChats < ActiveRecord::Migration[5.1]
  def change
    add_index :chats, :user_id_two
  end
end
