class CountView < ApplicationRecord

validates_presence_of(:my_column_name)
include Impressionist::IsImpressionable
is_impressionable :counter_cache => true, :column_name => :my_column_name

end
