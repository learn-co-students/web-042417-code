class TodosController < ApplicationController
  get "/" do
    @todos = Todo.all
    erb :'todos/index'
  end

  get "/todos/:id" do
    # binding.pry
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      @todo = Todo.find(todo_id)
      erb :'todos/show'
    else
      redirect '/'
    end
  end

end
