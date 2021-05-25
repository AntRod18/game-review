class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.text :title
      t.string :released_date

      t.timestamps
    end
  end
end
