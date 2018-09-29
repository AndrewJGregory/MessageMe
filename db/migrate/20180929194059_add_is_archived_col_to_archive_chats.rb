class AddIsArchivedColToArchiveChats < ActiveRecord::Migration[5.1]
  def change
    add_column :archive_chats, :is_archived, :boolean, default: false
  end
end
