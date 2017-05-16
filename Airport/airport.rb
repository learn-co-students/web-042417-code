class Airport
  attr_accessor :planes
  attr_reader :name, :location

  def initialize(name, location)
    @name = name
    @location = location
    @planes = []
  end



end
