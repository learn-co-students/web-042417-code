class CreateHits < ActiveRecord::Migration[5.1]
  def change
    create_table :hits do |t|
      t.string :target
      t.string :location

      t.timestamps
    end
  end
end
