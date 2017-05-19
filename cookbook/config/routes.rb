Rails.application.routes.draw do
  resources :ingredients
  get 'recipes' => 'recipes#index'

  get 'recipes/new'

  get 'recipes/edit'

  get 'recipes/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
