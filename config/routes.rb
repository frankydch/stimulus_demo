Rails.application.routes.draw do
  root to: 'pages#home'
  get 'exercices', to: 'pages#exercices'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
