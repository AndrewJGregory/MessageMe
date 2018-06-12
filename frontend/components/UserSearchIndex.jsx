import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";

class UserSearchIndex extends React.Component {
  doesUsernameMatchQuery(username) {
    const regExp = new RegExp(`${this.props.searchQuery.toLowerCase()}`);
    return regExp.test(username.toLowerCase());
  }

  filterUserSearchResults() {
    return this.props.userResults.reduce((users, user) => {
      if (this.doesUsernameMatchQuery(user.username)) {
        users.push(<UserSearchIndexItemContainer user={user} key={user.id} />);
      }
      return users;
    }, []);
  }

  render() {
    let users = this.filterUserSearchResults();

    if (this.props.searchQuery.length === 0) {
      users = users.slice(0, 11);
    }

    return <ul className="user-search-results scrollable">{users}</ul>;
  }
}

export default UserSearchIndex;
