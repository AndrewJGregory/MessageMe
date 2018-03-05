# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           default(""), not null
#  encrypted_password :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class User < ApplicationRecord
  validates :email, presence: true
  devise :database_authenticatable
end
