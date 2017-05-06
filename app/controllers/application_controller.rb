class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_action :authenticate_admin!

  # Overwriting the sign_in redirect path method
  def after_sign_in_path_for(resource)
    rails_admin_path
  end

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for(resource_or_scope)
    new_admin_session_path
  end
end
