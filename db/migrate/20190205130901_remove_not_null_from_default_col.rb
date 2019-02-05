class RemoveNotNullFromDefaultCol < ActiveRecord::Migration[5.1]
  def change
    change_column_null :message_statuses, :is_seen, true
  end
end
