# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_04_08_194241) do
  create_table "comments", force: :cascade do |t|
    t.integer "id_geo_data"
    t.text "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id_geo_data"], name: "index_comments_on_id_geo_data"
  end

  create_table "geo_data", force: :cascade do |t|
    t.text "id_geo"
    t.string "type_m"
    t.string "magnitude"
    t.string "place"
    t.time "time"
    t.text "url"
    t.integer "tsumami"
    t.string "magnitude_type"
    t.text "title"
    t.string "longitude"
    t.string "latitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["id_geo"], name: "index_geo_data_on_id_geo", unique: true
  end

end
