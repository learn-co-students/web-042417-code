# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
  ingredients = Ingredient.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
  recipe = Recipe.create(title: 'Luke')
  recipe.ingredients << ingredients
