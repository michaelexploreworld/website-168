class AddKeywordToWebsites < ActiveRecord::Migration[5.0]
  def change
    add_column :websites, :keyword, :text
  end
end
