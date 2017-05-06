class AddKeywordToWebsites < ActiveRecord::Migration[5.0]
  def change
    add_column :websites, :keyword, :string, :null => false, :default => ""
  end
end
