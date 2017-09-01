class AddBackgroundImageColumnToHomepageviews < ActiveRecord::Migration[5.0]
  def change
    add_column :homepageviews, :homeSectionBackground, :string, :null => false, :default => ""
    add_column :homepageviews, :websiteCategoryBackground, :string, :null => false, :default => ""
  end
end
