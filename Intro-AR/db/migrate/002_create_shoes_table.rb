class CreateShoesTable < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.string :brand
      t.integer :size

    end
  end
end
