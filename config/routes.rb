Rails.application.routes.draw do
  resources :pages
  resources :home
  resources :resume

  resources :users do
    resources :comments
  end

  root 'pages#index'
end
