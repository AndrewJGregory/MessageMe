class IndexOnChatIdArchiveChats < ActiveRecord::Migration[5.1]
  def change
    add_index :archive_chats, :chat_id
  end
end
