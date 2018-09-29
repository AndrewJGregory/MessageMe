class IndexOnUserIdMessages < ActiveRecord::Migration[5.1]
  def change
    add_index :messages, :user_id
  end
end
