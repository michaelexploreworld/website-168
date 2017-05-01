class HomePageController < ApplicationController
  def index
    @websites = Website.all
  end
end
