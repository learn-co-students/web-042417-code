class AddColumnUserToShoes < ActiveRecord::Migration
  def change
    add_reference :shoes, :user, foreign_key: true
  end
end
