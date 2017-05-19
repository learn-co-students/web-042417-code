class AddStuffToRecipes < ActiveRecord::Migration[5.1]
  def change
    add_column :recipes, :stuff, :string
  end
end
