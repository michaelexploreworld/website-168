class Admin < ActiveRecord::Base
  devise :database_authenticatable,
         :rememberable,
         :trackable,
         :validatable,
         :timeoutable,
         :timeout_in => 30.minutes
end
