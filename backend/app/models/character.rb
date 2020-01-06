class Character < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :spec, presence: true
  validates :race, presence: true
  validates :age, presence: true
  validates :str, presence: true
  validates :dex, presence: true
  validates :const, presence: true
  validates :int, presence: true
  validates :wis, presence: true
  validates :char, presence: true
  validates :details, presence: true
end
