class CreateGifts < ActiveRecord::Migration[7.0]
  def change
    create_table :gifts do |t|
      t.string :description
      t.decimal :price
      t.string :link

      t.timestamps
    end
  end
end
