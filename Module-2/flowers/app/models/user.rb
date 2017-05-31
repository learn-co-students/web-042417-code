class User < ApplicationRecord
  has_secure_password
  has_many :providers
  validates :email, presence: true, uniqueness: true

  def self.sign_in_from_omniauth(auth)
    if Provider.find_by(provider: auth['provider'], uid: auth['uid'])
      return Provider.find_by(provider: auth['provider'], uid: auth['uid']).user
    else
      return create_user_from_omniauth(auth)
    end
  end

  def self.create_user_from_omniauth(auth)
    user = create(
      username: auth['info']['nickname'],
      email: auth['info']['email'],
      password: random_password
    )
    provider = Provider.create(
      provider: auth['provider'],
      uid: auth['uid'],
      user_id: user.id
    )
    if provider.errors
      return provider
    else
      return user
    end
  end
 # random password generator
 private
 CHARS = ('0'..'9').to_a + ('A'..'Z').to_a + ('a'..'z').to_a
def self.random_password(length=10)
  CHARS.sort_by { rand }.join[0...length]
end


end
