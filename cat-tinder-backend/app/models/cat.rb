class Cat < ApplicationRecord
    validates :name, :age, :enjoys, presence: true
    has_one_attached :avatar
end
