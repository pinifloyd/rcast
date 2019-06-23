json.status 200

json.messages do
  json.array! @messages do |message|
    json.id message.id
    json.content message.content
    json.userId message.user_id
    json.userName ::User.find(message.user_id).try(:[], :name)
    json.createdAt message.created_at.strftime('%d.%m.%Y')
  end
end