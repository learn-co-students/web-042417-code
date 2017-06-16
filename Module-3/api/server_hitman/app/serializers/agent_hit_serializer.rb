class AgentHitSerializer < ActiveModel::Serializer
  attributes :id
  has_one :agent
  has_one :hit
end
