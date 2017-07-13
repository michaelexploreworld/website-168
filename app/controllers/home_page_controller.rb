class HomePageController < ApplicationController
  skip_before_action :authenticate_admin!, :only => [:index, :search_websites]

  def index
    @websites = Website.page(params[:page] || 1).per(8)

    respond_to do |format|
      format.html
      format.js
    end
  end

  def search_websites
    @websites = Website.search(params[:term], params[:page])

    respond_to do |format|
      format.js
    end

  end
end
