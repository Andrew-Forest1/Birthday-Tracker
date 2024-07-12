class FriendSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :birthday
  has_many :gifts
end
