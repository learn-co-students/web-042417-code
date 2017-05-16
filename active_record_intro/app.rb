require 'bundler/setup'
Bundler.require(:default, :development)
require 'active_record'

ActiveRecord::Base.logger = Logger.new(STDOUT)
configuration = YAML::load(IO.read('config/database.yml'))
ActiveRecord::Base.establish_connection(configuration['development'])

require_all 'models'
