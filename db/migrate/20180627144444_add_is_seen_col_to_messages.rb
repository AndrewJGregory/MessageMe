class AddIsSeenColToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :is_seen, :boolean, default: false
  end
end
