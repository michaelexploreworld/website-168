class Website < ApplicationRecord
  validates :name,        :presence => true,
                          :uniqueness => true

  validates :description, :presence => true

  validates :keyword,     :presence => true

  validates :url,         :presence => true,
                          :uniqueness => true,
                          format: { with: /(^$)|(^(http|https):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(([0-9]{1,5})?\/.*)?$)/ix }

  validates :logo,        :presence => true

  mount_uploader :logo, PhotoUploader
  def website_params
    params.require(:website)
    permit(:logo, :logo_cache, :remove_logo)
  end
end
