class IndexOnUserIdArchiveChats < ActiveRecord::Migration[5.1]
  def change
    add_index :archive_chats, :user_id
  end
end
