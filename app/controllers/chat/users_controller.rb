class Chat::UsersController < ApplicationController

  # :nodoc
  #----------------------------------------------------------------------------
  def index
    @users = ::User.all
  end

end