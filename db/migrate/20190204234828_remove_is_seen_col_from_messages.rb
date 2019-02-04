class RemoveIsSeenColFromMessages < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :is_seen
  end
end
