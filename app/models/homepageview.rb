class Homepageview < ApplicationRecord
    validates :brandName, :presence => true
    validates :navItem1, :presence => true
    validates :navItem2, :presence => true
    validates :navItem3, :presence => true
    validates :searchPlaceholder, :presence => true
    validates :aboutSectionHeader, :presence => true
    validates :aboutSectionContent, :presence => true
    validates :websiteCategorySectionHeader, :presence => true
    validates :subwebsiteSectionHeader, :presence => true

end
