class TodosController < ApplicationController
  get "/" do
    @todos = Todo.all
    erb :'todos/index'
  end

  get "/todos/:id" do
    # binding.pry
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      @todo = Todo.find(params[:id])
      erb :'todos/show'
    else
      erb :'404', layout: false
    end
  end

end
