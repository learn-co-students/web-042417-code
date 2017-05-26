Rails.application.routes.draw do
  root 'posts#index'
  resources :posts
  resources :users, except: [:destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end
