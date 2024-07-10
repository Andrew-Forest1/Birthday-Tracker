class GiftSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :link
  belongs_to :friend
end
