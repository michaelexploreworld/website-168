class CreateHomepageviews < ActiveRecord::Migration[5.0]
  def change
    create_table :homepageviews do |t|
      t.string  :brandName, :null => false
      t.string  :navItem1, :null => false
      t.string  :navItem2, :null => false
      t.string  :navItem3, :null => false
      t.string  :searchPlaceholder
      t.string  :aboutSectionHeader, :null => false
      t.text  :aboutSectionContent
      t.string  :websiteCategorySectionHeader, :null => false
      t.string  :subwebsiteSectionHeader, :null => false

      t.timestamps
    end
  end
end
