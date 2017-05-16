class CreateShoesTable < ActiveRecord::Migration
  def change
    create_table :shoes do |t|
      t.string :brand
      t.string :model
      t.integer :size
      t.references :user
    end
  end
end
