class RemoveUniquenessUserIdTwoOnChats < ActiveRecord::Migration[5.1]
  def change
    remove_index :chats, :user_id_two
  end
end
