class RemoveAboutFromHomepageviews < ActiveRecord::Migration[5.0]
  def change
    remove_column :homepageviews, :aboutSectionHeader, :string
    remove_column :homepageviews, :aboutSectionContent, :string
    remove_column :homepageviews, :navItem3, :string
  end
end
