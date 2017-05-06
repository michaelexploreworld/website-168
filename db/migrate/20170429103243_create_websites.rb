class CreateWebsites < ActiveRecord::Migration[5.0]
  def change
    create_table :websites do |t|
      t.string :name, :null => false, :unique => true
      t.text :description, :null => false
      t.string :url, :null => false, :unique => true

      t.timestamps
    end
  end
end
