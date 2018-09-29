class CreateArchiveChats < ActiveRecord::Migration[5.1]
  def change
    create_table :archive_chats do |t|
      t.integer :user_id, null: false
      t.integer :chat_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
