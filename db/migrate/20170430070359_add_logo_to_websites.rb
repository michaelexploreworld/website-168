class AddLogoToWebsites < ActiveRecord::Migration[5.0]
  def change
    add_column :websites, :logo, :string
  end
end
