import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";

class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.shouldBeShown = this.shouldBeShown.bind(this);
  }

  doesUsernameMatchQuery(username) {
    const regExp = new RegExp(`${this.props.searchQuery.toLowerCase()}`);
    return regExp.test(username.toLowerCase());
  }

  shouldBeShown(user) {
    const matchesQuery = this.doesUsernameMatchQuery(user.username);
    if (this.props.searchQuery) {
      return matchesQuery;
    } else {
      return !user.isChatArchived;
    }
  }

  filterUserSearchResults() {
    let idx = 1;
    const totalUsers = this.props.userResults.filter(this.shouldBeShown).length;
    return this.props.userResults.reduce((users, user) => {
      if (this.shouldBeShown(user)) {
        users.push(
          <UserSearchIndexItemContainer
            totalUsers={totalUsers}
            idx={idx++}
            user={user}
            key={user.id}
          />,
        );
      }
      return users;
    }, []);
  }

  render() {
    let users = this.filterUserSearchResults();

    const altContent =
      this.props.hasSearched && users.length === 0 ? (
        <li>No users found</li>
      ) : (
        <li>Press enter to search</li>
      );

    return (
      <ul className="user-search-results scrollable">
        {users.length === 0 ? altContent : users}
        <li className="hidden" />
      </ul>
    );
  }
}

export default UserSearchIndex;
