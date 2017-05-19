require 'pry'
class Cart
  attr_accessor :color, :opened_in, :manager, :money
  @@all_carts = []
  DEFAULT_MENU = ["Chicken","Lamb","Combo","Burger","Hotdog","Rice"]
  def initialize(color,opened,manager)
    binding.pry
  	@color = color
  	@opened_in = opened
  	@manager = manager
  	@money = false
    @@all_carts << self
    puts "Our specialized menu #{DEFAULT_MENU}"
  end
  def self.all
    @@all_carts
  end
end
