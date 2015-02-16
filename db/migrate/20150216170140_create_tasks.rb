class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :goal
      t.date :due_date

      t.timestamps null: false
    end
  end
end
