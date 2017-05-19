class Plane
  attr_accessor :destination, :terminal, :passengers
  attr_reader :seats

  def initialize(d,t,s)
    @destination = d
    @terminal = t
    @passengers = []
    @seats = s
  end
  def addPassenger(passenger)
    @passengers << passenger
    passenger.flight = self
  end
end
