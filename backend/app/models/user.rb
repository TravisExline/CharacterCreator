class User < ApplicationRecord
    has_many :characters
    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, length: { in: 5..20 }
end
