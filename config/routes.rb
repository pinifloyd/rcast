Rails.application.routes.draw do

  # :nodoc
  #----------------------------------------------------------------------------
  devise_for :users, class_name: 'User', controllers: {
    sessions: 'auth/sessions_controller'
  }

  # :nodoc
  #----------------------------------------------------------------------------
  root to: 'application#home'

  # :nodoc
  #----------------------------------------------------------------------------
  # mount ActionCable.server => '/web_socket'

  # :nodoc
  #----------------------------------------------------------------------------
  # namespace :chat do
  #   resources :users, only: %i(index)
  #   resources :messages, only: %i(index create)
  # end

end
