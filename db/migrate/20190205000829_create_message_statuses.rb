class CreateMessageStatuses < ActiveRecord::Migration[5.1]
  def change
    create_table :message_statuses do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :message_id, null: false, foreign_key: true
      t.boolean :is_seen, null: false, default: false
      t.timestamps
    end

    add_index :message_statuses, :user_id
    add_index :message_statuses, :message_id
  end
end
