Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/about/:name', to: 'home#about_us' , as: 'about'
  get '/about/new' => 'home#contact' , as: 'contact'


  resources :home  do
    resources :about
  end
end
