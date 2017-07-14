class CountView < ApplicationRecord

validates_presence_of(:count_number)
include Impressionist::IsImpressionable
is_impressionable :counter_cache => true, :column_name => :count_number

end
