require 'active_record'
require 'sqlite3'
require 'logger'
require 'require_all'

ActiveRecord::Base.logger = Logger.new(STDOUT)
configuration = YAML::load(IO.read('config/database.yml'))
ActiveRecord::Base.establish_connection(configuration['development'])

require_all 'models'
