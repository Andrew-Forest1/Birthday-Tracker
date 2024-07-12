class Gift < ApplicationRecord
    belongs_to :friend

    validates_presence_of :description, :price, :link
end
