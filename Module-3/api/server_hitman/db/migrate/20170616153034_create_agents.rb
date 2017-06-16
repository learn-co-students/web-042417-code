class CreateAgents < ActiveRecord::Migration[5.1]
  def change
    create_table :agents do |t|
      t.string :alias
      t.integer :barcode

      t.timestamps
    end
  end
end
