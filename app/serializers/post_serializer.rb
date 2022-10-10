class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :photos, :created_at 
  has_one :user
  has_many :comments
end
