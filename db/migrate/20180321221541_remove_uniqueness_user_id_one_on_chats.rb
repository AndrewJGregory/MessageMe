class RemoveUniquenessUserIdOneOnChats < ActiveRecord::Migration[5.1]
  def change
    remove_index :chats, :user_id_one
  end
end
