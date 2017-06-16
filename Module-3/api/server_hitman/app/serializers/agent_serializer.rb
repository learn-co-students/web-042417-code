class AgentSerializer < ActiveModel::Serializer
  attributes :id, :alias, :barcode
  has_many :hits
end
