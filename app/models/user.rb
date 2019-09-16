class User < ApplicationRecord

  # :nodoc
  #----------------------------------------------------------------------------
  devise :database_authenticatable, :rememberable, :validatable, :trackable

  # :nodoc
  #----------------------------------------------------------------------------
  @@users = [
    { id: 1, name: 'Pinifloyd' },
    { id: 2, name: 'Richard' },
    { id: 3, name: 'Bella' }
  ]

  # :nodoc
  #----------------------------------------------------------------------------
  def self.find(id)
    @@users.select { |user| user[:id] === id.to_i }.first
  end

  # :nodoc
  #----------------------------------------------------------------------------
  def self.all
    @@users
  end

end