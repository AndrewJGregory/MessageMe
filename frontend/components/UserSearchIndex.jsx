import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";

class UserSearchIndex extends React.Component {
  doesUsernameMatchQuery(username) {
    const regExp = new RegExp(`${this.props.searchQuery.toLowerCase()}`);
    return regExp.test(username.toLowerCase());
  }

  filterUserSearchResults() {
    let idx = 1;
    return this.props.userResults.reduce((users, user) => {
      if (this.doesUsernameMatchQuery(user.username)) {
        users.push(
          <UserSearchIndexItemContainer idx={idx++} user={user} key={user.id} />
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

    if (this.props.searchQuery.length === 0) {
      users = users.slice(0, 11);
    }
    return (
      <ul className="user-search-results scrollable">
        {users.length === 0 ? altContent : users}
      </ul>
    );
  }
}

export default UserSearchIndex;
