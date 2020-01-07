class CreateInitiations < ActiveRecord::Migration[6.0]
  def change
    create_table :initiations do |t|
      t.string :characters

      t.timestamps
    end
  end
end
