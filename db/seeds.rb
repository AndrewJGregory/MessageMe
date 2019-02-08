User.destroy_all
Message.destroy_all
Chat.destroy_all
ArchiveChat.destroy_all
MessageStatus.destroy_all

messages = ['At length the Parsonage was discernible', 'The garden sloping to the road, the house standing in it, the green pales, and the laurel hedge, everything declared they were arriving', 'Collins and Charlotte appeared at the door, and the carriage stopped at the small gate which led by a short gravel walk to the house, amidst the nods and smiles of the whole party', 'In a moment they were all out of the chaise, rejoicing at the sight of each other', 'Collins welcomed her friend with the liveliest pleasure, and Elizabeth was more and more satisfied with coming when she found herself so affectionately received', "She saw instantly that her cousin's manners were not altered by his marriage; his formal civility was just what it had been, and he detained her some minutes at the gate to hear and satisfy his inquiries after all her family", "They were then, with no other delay than his pointing out the neatness of the entrance, taken into the house; and as soon as they were in the parlour, he welcomed them a second time, with ostentatious formality to his humble abode, and punctually repeated all his wife's offers of refreshment", 'Elizabeth was prepared to see him in his glory; and she could not help in fancying that in displaying the good proportion of the room, its aspect and its furniture, he addressed himself particularly to her, as if wishing to make her feel what she had lost in refusing him', 'But though everything seemed neat and comfortable, she was not able to gratify him by any sigh of repentance, and rather looked with wonder at her friend that she could have so cheerful an air with such a companion', 'Collins said anything of which his wife might reasonably be ashamed, which certainly was not unseldom, she involuntarily turned her eye on Charlotte', 'Once or twice she could discern a faint blush; but in general Charlotte wisely did not hear', 'After sitting long enough to admire every article of furniture in the room, from the sideboard to the fender, to give an account of their journey, and of all that had happened in London, Mr', 'Collins invited them to take a stroll in the garden, which was large and well laid out, and to the cultivation of which he attended himself', 'To work in this garden was one of his most respectable pleasures; and Elizabeth admired the command of countenance with which Charlotte talked of the healthfulness of the exercise, and owned she encouraged it as much as possible', 'Here, leading the way through every walk and cross walk, and scarcely allowing them an interval to utter the praises he asked for, every view was pointed out with a minuteness which left beauty entirely behind', 'He could number the fields in every direction, and could tell how many trees there were in the most distant clump', 'But of all the views which his garden, or which the country or kingdom could boast, none were to be compared with the prospect of Rosings, afforded by an opening in the trees that bordered the park nearly opposite the front of his house', 'It was a handsome modern building, well situated on rising ground', 'From his garden, Mr', "Collins would have led them round his two meadows; but the ladies, not having shoes to encounter the remains of a white frost, turned back; and while Sir William accompanied him, Charlotte took her sister and friend over the house, extremely well pleased, probably, to have the opportunity of showing it without her husband's help", 'It was rather small, but well built and convenient; and everything was fitted up and arranged with a neatness and consistency of which Elizabeth gave Charlotte all the credit', "Collins could be forgotten, there was really an air of great comfort throughout, and by Charlotte's evident enjoyment of it, Elizabeth supposed he must be often forgotten"]

used_names = []
new_name = nil

User.create!(username: 'andrew', password: 'password')
guest = User.create!(username: 'guest', password: 'secure-password123')

### BEGIN USERS ###
20.times do
  new_name = Faker::Name.first_name
  new_name = Faker::Name.first_name while used_names.include?(new_name)
  User.create!(username: new_name, password: 'password')
  used_names.push(new_name)
end

### END USERS ###

all_users = User.all
guest_id = guest.id

### BEGIN MESSAGES ###
Message.skip_callback(:create, :after, :broadcast_message, raise: false)
messages.each_with_index do |message, idx|
  random_user_id = all_users.sample.id
  user_id = idx.even? ? random_user_id : guest_id
  chat = Chat.new(user_id_one: guest_id, user_id_two: user_id)
  if chat.save
    message_id = Message.create!(content: message, user_id: user_id, chat_id: chat.id).id
    sender_message_status = MessageStatus.find_by(message_id: message_id, user_id: user_id)
    sender_message_status.update(is_seen: true)
  end
end
Message.set_callback(:create, :after, :broadcast_message, raise: false)
### END MESSAGES ###