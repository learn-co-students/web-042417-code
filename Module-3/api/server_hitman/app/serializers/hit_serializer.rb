class HitSerializer < ActiveModel::Serializer
  attributes :id, :target, :location
end
