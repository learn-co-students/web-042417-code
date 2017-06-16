class Hit < ApplicationRecord
  has_many :agent_hits
  has_many :agents  , through: :agent_hits
end
