require "erb"

class Montana
  def call(env)
    # env.each { |k,v| puts "#{k}=>#{v}"}
    request  = Rack::Request.new(env)
    case request.path
          when "/" then Rack::Response.new(render("index.html.erb"))
          when "/about" then Rack::Response.new(render("about.html.erb"))
          else Rack::Response.new("Not Found get out creep!", 404)
    end
  end

  def render(template)
    path = File.expand_path("../views/#{template}", __FILE__)
    ERB.new(File.read(path)).result(binding)
  end
end
