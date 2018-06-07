import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";

class UserSearchIndex extends React.Component {
  doesUsernameMatchQuery(username) {
    const regExp = new RegExp(`${this.props.query}`);
    return regExp.test(username.toLowerCase());
  }

  render() {
    let users = null;
    users = this.props.userResults.reduce((users, user) => {
      if (this.doesUsernameMatchQuery(user.username)) {
        users.push(
          <UserSearchIndexItemContainer
            user={user}
            key={user.id}
            clearQuery={this.props.clearQuery}
          />
        );
      }
      return users;
    }, []);

    if (this.props.query.length === 0) {
      users = users.slice(0, 11);
    }

    return <ul className="user-search-results scrollable">{users}</ul>;
  }
}

export default UserSearchIndex;
