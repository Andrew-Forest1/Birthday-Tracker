class AddFriendToGifts < ActiveRecord::Migration[7.0]
  def change
    add_reference :gifts, :friend, null: false, foreign_key: {on_delete: :cascade}
  end
end
