Rails.application.routes.draw do



  root "flowers#index"
  get  "/flowers" =>'flowers#index', as: :flowers
  post "/flowers" => "flowers#create"
  get "/flowers/new" => "flowers#new", as: :new_flower
  get "/flowers/:id" => "flowers#show", as: :flower
  get "/flowers/:id/edit" => "flowers#edit", as: :edit_flower
  patch "/flowers/:id" => "flowers#update"
  delete "/flowers/:id" => "flowers#destroy", as: :delete_flower

  resources :users , only: [:index, :new, :create]

  get 'login', to: 'sessions#new'
  delete "/logout", to: "sessions#destroy", as: :logout
  resources :sessions, only: [:new, :create, :destroy]

end
