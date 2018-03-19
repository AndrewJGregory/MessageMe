Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]
    resources :users, only: [:create]
    resources :searches, only: [:create]
    resources :chats, only: %i[create show]
    resources :messages, only: [:create]
  end

  root to: 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
