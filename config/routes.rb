Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home_page
  root :to => "home_page#index"

  devise_for :admins
  mount RailsAdmin::Engine => '/admins', as: 'rails_admin'
end
