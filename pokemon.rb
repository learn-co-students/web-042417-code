require 'rest-client'
require 'json'
require 'pry'

URL = 'http://pokeapi.co/api/v2/'


def getPokemonByName(name)
  response = JSON.parse(RestClient.get(URL+"pokemon/#{name}/"))
  p response['name']
end
def getAllPokemon()
  response = JSON.parse(RestClient.get(URL+"pokemon/"))
  response['results'].each_with_index(1) do |pokemon, index|
    puts "#{index}. #{pokemon['name']}"
  end
end
binding.pry
