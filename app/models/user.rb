# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           default(""), not null
#  password_digest :string           default(""), not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string

class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :username, presence: { message: 'Please enter your username.' }, uniqueness: { message: 'Username has already been taken. Try another username.' }
  validates :password, length: { minimum: 6, allow_nil: true, message: 'Your password is too short. Minimum is 6 characters.' }

  attr_reader :password
  after_initialize :ensure_session_token

  def get_messages_with(other_user)
    Chat.find_chat(self.id, other_user.id).get_messages(self.id)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token
    self.session_token = generate_session_token
    save!
    session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end
end
