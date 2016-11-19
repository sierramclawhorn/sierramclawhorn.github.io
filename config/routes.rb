Rails.application.routes.draw do
  resources :pages

  resources :users do
    resources :comments
  end

  root 'pages#index'
end
