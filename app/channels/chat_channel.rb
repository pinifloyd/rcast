class ChatChannel < ApplicationCable::Channel

  # :nodoc
  #----------------------------------------------------------------------------
  def subscribed
    stream_from 'chat_channel'
  end

  # :nodoc
  #----------------------------------------------------------------------------
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
