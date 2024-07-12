class Friend < ApplicationRecord
    has_many :gifts

    validates_presence_of :name, :address, :birthday
end
