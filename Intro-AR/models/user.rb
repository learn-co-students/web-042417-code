class User < ActiveRecord::Base
  has_many :shoes
  before_save :count_shoes
  def count_shoes
    self.shoes.count
  end
end
