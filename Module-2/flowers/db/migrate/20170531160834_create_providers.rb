class CreateProviders < ActiveRecord::Migration[5.1]
  def change
    create_table :providers do |t|
      t.string :provider, index: :true
      t.string :uid, index: :true
      t.references :user, foreign_key: true
    end
  end
end
