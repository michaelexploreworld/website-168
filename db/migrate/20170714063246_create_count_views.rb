class CreateCountViews < ActiveRecord::Migration[5.0]
  def change
    create_table :count_views do |t|
      t.integer :my_column_name, :default => 0
      t.timestamps
    end
  end
end
