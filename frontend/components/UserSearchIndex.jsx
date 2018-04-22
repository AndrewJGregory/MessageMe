import React from "react";
import UserSearchIndexItem from "./UserSearchIndexItem";
import { redirectToChat } from "../util/chat";

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
      redirectToChat(this, id);
    }
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
