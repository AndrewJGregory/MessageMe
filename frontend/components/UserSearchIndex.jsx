import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";

class UserSearchIndex extends React.Component {
  doesUsernameMatchQuery(username) {
    const regExp = new RegExp(`${this.props.searchQuery.toLowerCase()}`);
    return regExp.test(username.toLowerCase());
  }

  filterUserSearchResults() {
    let idx = 1;
    const totalUsers = this.props.userResults.filter(user =>
      this.doesUsernameMatchQuery(user.username)
    ).length;
    return this.props.userResults.reduce((users, user) => {
      if (this.doesUsernameMatchQuery(user.username)) {
        users.push(
          <UserSearchIndexItemContainer
            totalUsers={totalUsers}
            idx={idx++}
            user={user}
            key={user.id}
          />
        );
      }
      return users;
    }, []);
  }

  render() {
    let users = this.filterUserSearchResults();
    const isInitialRender = this.props.currentUserCount === 0;
    const doesNoUserMatchSearchQuery = users.length === 0;
    const shouldMessageBeDisplayed =
      !isInitialRender && doesNoUserMatchSearchQuery;
    const altContent = shouldMessageBeDisplayed ? (
      <li>No users found!</li>
    ) : null;

    return (
      <ul className="user-search-results scrollable">
        {users.length === 0 ? altContent : users}
      </ul>
    );
  }
}

export default UserSearchIndex;
