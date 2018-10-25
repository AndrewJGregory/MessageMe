Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :session, only: %i[create destroy]
    resources :users, only: %i[create show]
    resources :searches, only: [:create]
    resources :chats, only: %i[create show update destroy]
    resources :messages, only: %i[create update]
  end

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
