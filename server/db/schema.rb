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

ActiveRecord::Schema[7.1].define(version: 0) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "case_informations", primary_key: "case id", id: { type: :string, limit: 7 }, force: :cascade do |t|
    t.string "age", limit: 3, null: false
    t.string "age group", limit: 8, null: false
    t.string "sex", limit: 6, null: false
    t.date "date announced", null: false
    t.string "date recovered", limit: 10, null: false
    t.string "date of death", limit: 10, null: false
    t.string "status", limit: 16, null: false
    t.string "date announced as removed", limit: 10, null: false
    t.string "province", limit: 19, null: false
    t.string "muni city", limit: 25, null: false
    t.string "health status", limit: 12, null: false
    t.string "home quarantined", limit: 3, null: false
    t.string "date of onset of symptoms", limit: 10, null: false
    t.string "pregnant", limit: 3, null: false
    t.string "region", limit: 43, null: false
  end

end
