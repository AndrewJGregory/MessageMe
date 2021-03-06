# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190205130901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "archive_chats", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "chat_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_archived", default: false
    t.index ["chat_id"], name: "index_archive_chats_on_chat_id"
    t.index ["user_id"], name: "index_archive_chats_on_user_id"
  end

  create_table "chats", force: :cascade do |t|
    t.integer "user_id_one", null: false
    t.integer "user_id_two", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id_one"], name: "index_chats_on_user_id_one"
    t.index ["user_id_two"], name: "index_chats_on_user_id_two"
  end

  create_table "message_statuses", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "message_id", null: false
    t.boolean "is_seen", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id"], name: "index_message_statuses_on_message_id"
    t.index ["user_id"], name: "index_message_statuses_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.text "content", null: false
    t.integer "user_id", null: false
    t.integer "chat_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", default: "", null: false
    t.string "password_digest", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
