class CreateChatMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_messages do |t|
      t.integer :user_id
      t.text    :content

      t.timestamps
    end
  end
end
