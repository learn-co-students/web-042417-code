require_relative 'plane'
require_relative 'passenger'
require_relative 'airport'
require "pry"

jfk = Airport.new('JFK','NYC')

boeing1 = Plane.new('LAX','B55',3)
boeing2 = Plane.new('DEN','D11',2)

sammy = Passenger.new("Sammy")
jake = Passenger.new("Jake")
ryan = Passenger.new("Ryan")

jfk.planes << boeing2
jfk.planes << boeing1

boeing1.addPassenger(sammy)
binding.pry
