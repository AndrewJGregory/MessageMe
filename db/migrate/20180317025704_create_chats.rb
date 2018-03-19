class CreateChats < ActiveRecord::Migration[5.1]
  def change
    create_table :chats do |t|
      t.integer :user_id_one, null: false
      t.integer :user_id_two, null: false

      t.timestamps null: false
    end
    add_index :chats, :user_id_one, unique: true
    add_index :chats, :user_id_two, unique: true
  end
end
