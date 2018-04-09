import React from "react";
import UserSearchIndexItem from "./UserSearchIndexItem";

class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const id = e.target.dataset.userId;
    let chatId = null;
    this.props.history.push(`/messages/${id}`);
    this.createChatAndFetchMessages(id);
  }

  createChatAndFetchMessages(
    otherUserId,
    currentUserId = this.props.currentUserId
  ) {
    this.props.createChat(currentUserId, otherUserId).then(chat => {
      let chatId = Object.keys(chat);
      this.props.fetchMessages(chatId);
    });
  }

  render() {
    const regExp = new RegExp(`${this.props.query}`);
    let users = null;
    users = this.props.userResults.reduce((users, user) => {
      if (regExp.test(user.username)) {
        users.push(<UserSearchIndexItem user={user} key={user.id} />);
      }
      return users;
    }, []);

    return (
      <ul className="user-search-results" onClick={this.handleClick}>
        {users}
      </ul>
    );
  }
}

export default UserSearchIndex;
