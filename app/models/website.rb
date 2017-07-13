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

  def self.search(term, pageNumber)
  if term
    where('keyword LIKE ?', "%#{term}%").page(pageNumber || 1).per(8)
  else
    page(pageNumber || 1).per(8)
  end
end

end
