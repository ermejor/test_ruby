class CreateComments < ActiveRecord::Migration[7.1]
  def change
    create_table :comments do |t|
      t.integer :id_geo_data
      t.text :comment

      t.timestamps
    end
    add_index :comments, :id_geo_data
  end
end
