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
    if (id) {
      this.props.clearQuery();
      this.redirectToChat(id);
    }
  }

  componentDidMount() {
    const userId = this.props.match.params.userId;
    if (!userId && this.props.userResults.length > 0) {
      const mostRecentUserId = this.props.userResults[0].id;
      this.redirectToChat(mostRecentUserId);
    }
  }

  redirectToChat(userId) {
    this.props.history.push(`/messages/${userId}`);
    this.props.createChatAndFetchMessages(userId);
  }

  doesUsernameMatchQuery(username) {
    const regExp = new RegExp(`${this.props.query}`);
    return regExp.test(username.toLowerCase());
  }

  render() {
    let users = null;
    users = this.props.userResults.reduce((users, user) => {
      if (this.doesUsernameMatchQuery(user.username)) {
        users.push(<UserSearchIndexItem user={user} key={user.id} />);
      }
      return users;
    }, []);
    return (
      <ul className="user-search-results scrollable" onClick={this.handleClick}>
        {users}
      </ul>
    );
  }
}

export default UserSearchIndex;
