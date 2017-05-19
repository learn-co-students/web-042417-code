require "./montana.rb"

use Rack::Reloader, 0
run Montana.new
