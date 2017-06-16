class Agent < ApplicationRecord
  has_many :agent_hits
  has_many :hits  , through: :agent_hits
end
