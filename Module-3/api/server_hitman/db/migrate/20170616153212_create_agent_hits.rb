class CreateAgentHits < ActiveRecord::Migration[5.1]
  def change
    create_table :agent_hits do |t|
      t.references :agent, foreign_key: true
      t.references :hit, foreign_key: true

      t.timestamps
    end
  end
end
