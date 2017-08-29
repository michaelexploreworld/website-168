class Homepageview < ApplicationRecord
    validates :brandName, :presence => true
    validates :navItem1, :presence => true
    validates :navItem2, :presence => true
    validates :searchPlaceholder, :presence => true
    validates :websiteCategorySectionHeader, :presence => true
    validates :subwebsiteSectionHeader, :presence => true

    validates :homeSectionBackground,        :presence => true
    validates :websiteCategoryBackground,        :presence => true

    mount_uploader :homeSectionBackground, PhotoUploader
    mount_uploader :websiteCategoryBackground, PhotoUploader
    # def homepageview_params
    #   params.require(:homepageview)
    #   permit(:homeSectionBackground, :homeSectionBackground_cache, :remove_homeSectionBackground)
    #   permit(:websiteCategoryBackground, :websiteCategoryBackground_cache, :remove_websiteCategoryBackground)
    # end

end
