class Chat::MessagesController < ApplicationController

  # :nodoc
  #----------------------------------------------------------------------------
  def index
    @messages = ::Message.order(id: :desc)
  end

  # :nodoc
  #----------------------------------------------------------------------------
  def create
    message = ::Message.create(create_params)

    # TODO: read json.jbuilder
    ActionCable.server.broadcast 'chat_channel', {
        id: message.id,
        content: message.content,
        userId: message.user_id,
        userName: ::User.find(message.user_id).try(:[], :name),
        createdAt: message.created_at.strftime('%d.%m.%Y')
    }
  end

  # :nodoc
  #----------------------------------------------------------------------------
  private def create_params
    params.require(:message).permit :content, :user_id
  end

end