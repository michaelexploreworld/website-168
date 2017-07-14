class CreateCountViews < ActiveRecord::Migration[5.0]
  def change
    create_table :count_views do |t|
      t.integer :count_number, :default => 0
      t.timestamps
    end
  end
end
