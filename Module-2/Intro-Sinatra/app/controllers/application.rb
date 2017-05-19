class ApplicationController < Sinatra::Base
  # sets root as the parent-directory of the current file
  #The directory used as a base for the application.
  #By default, this is assumed to be the directory containing the main application file (:app_file setting).
  #The root directory is used to construct the default :public_folder and :views settings.
  #A common idiom is to set the :root setting explicitly in the main application file as follows:
  set :root, File.join(File.dirname(__FILE__), '..')
  #__FILE__ is the path to the file you call it in.
  #File.dirname takes the full path and removes the filename
  #File.join add .. to the end

end
