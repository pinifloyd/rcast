Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # :nodoc
  #----------------------------------------------------------------------------
  root to: 'application#home'

  # :nodoc
  #----------------------------------------------------------------------------
  mount ActionCable.server => '/web_socket'

  # :nodoc
  #----------------------------------------------------------------------------
  namespace :chat do
    resources :users, only: %i(index)
    resources :messages, only: %i(index create)
  end

end
