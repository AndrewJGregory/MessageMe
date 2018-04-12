# [MessageMe](http://messagemeajg.herokuapp.com)

MessageMe is a single page web app inspired by Facebook Messenger. Built with Ruby on Rails, PostgreSQL, and React/Redux, it just might be the best messaging app ever.

# MVPs

#### Finished

* Search all available users [DONE]
* Direct, real time messaging [DONE]

#### TODO

* Group messages
* Users can friend/unfriend other users

# Everything else

### Enhancements

* Sort messages by most recently messaged on initial login / refresh
* Add visible timestamps to messages

### Bonuses

* Emoji support
* Send voice messages

### Optimizations (just for me to keep track of)

* Only fetch chat if it is necessary
* Fetch 10 most recently messaged users on login, if a search is performed and then fetch additional users from the backend (need to seed database with more users)
* Cache chats (in cookies?) so the database can be queried less often
* If no text is in the user input, have the MessageMe logo (thunderbolt) be able to be sent as a message. If there is text in the input, then only the "SEND" button is available.
