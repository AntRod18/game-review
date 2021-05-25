class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.text :game_title
      t.string :website
      t.string :score
      t.string :snippet
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
