Rails.application.routes.draw do
  resource :pages

  resources :users do
    resources :comments
  end

  root 'pages#index'
end
