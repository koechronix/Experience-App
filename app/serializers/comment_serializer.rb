class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :username, :created_at
  has_one :post
end
