class IndexOnChatIdMessages < ActiveRecord::Migration[5.1]
  def change
    add_index :messages, :chat_id
  end
end
