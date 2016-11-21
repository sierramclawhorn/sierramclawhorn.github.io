Rails.application.routes.draw do
  resources :pages
  resources :home
  resources :contacts
  resources :film
  resources :code
  resources :comments

  root 'pages#index'
end
