class CreateGeoData < ActiveRecord::Migration[7.1]
  def change
    create_table :geo_data do |t|
      t.text :id_geo
      t.string :type_m
      t.string :magnitude
      t.string :place
      t.time :time
      t.text :url
      t.integer :tsumami
      t.string :magnitude_type
      t.text :title
      t.string :longitude
      t.string :latitude

      t.timestamps
    end
    add_index :geo_data, :id_geo, unique: true
  end
end
