class HomePageController < ApplicationController
  skip_before_action :authenticate_admin!, :only => [:index]

  def index
    @websites = Website.all
  end
end
