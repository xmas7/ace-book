Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show] do
      resources :posts, only: [:create, :index]
      resources :friends, only: [:index, :create]
    end

    resource :session, only: [:create, :destroy]

    resources :posts, except: [:new, :edit] do
      resources :likes, only: [:index, :create]
    end

    resources :likes, only: [:destroy]

    resources :friends, only: [:update, :destroy]

  end
end
