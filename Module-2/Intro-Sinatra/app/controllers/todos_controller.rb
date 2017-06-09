class TodosController < ApplicationController
  get "/" do
    @todos = Todo.all
    erb :'todos/index'
  end
  get '/todos/new' do
    erb :'/todos/new'
  end
  post '/todos' do
    @todo = Todo.new(params[:todo])
    if @todo.save
      redirect "todos/#{@todo.id}"
    else
      redirect "/"
    end
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
  get "/todos/:id/edit" do
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      @todo = Todo.find(params[:id])
      erb :'todos/edit'
    else
      erb :'404', layout: false
    end
  end
  post '/todos/:id' do
    todo_id = params[:id].to_i
    if Todo.pluck(:id).include?(todo_id)
      @todo = Todo.find(params[:id])
      binding.pry
      @todo.update(params["todo"])
      erb :'todos/show'
    else
      redirect "/"
    end
  end
end
