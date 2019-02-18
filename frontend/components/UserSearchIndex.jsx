import PropTypes from "prop-types";
import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";

class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.shouldBeShown = this.shouldBeShown.bind(this);
  }

  componentDidUpdate(prevProps) {
    // handle if the current chat is deleted. Must redirect to another chat,
    // the next one in the sidebar
    if (prevProps.userResults.length - this.props.userResults.length === 1) {
      const oldUsers = prevProps.userResults.filter(this.shouldBeShown);
      const newUsers = this.props.userResults.filter(this.shouldBeShown);
      let i = 0;
      while (i < newUsers.length) {
        if (newUsers[i].id !== oldUsers[i].id) break;
        i++;
      }
      const userId = this.props.userResults[i].id;
      this.props.history.push(`/messages/${userId}`);
      this.props.redirectToChat(userId);
    }
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
      </ul>
    );
  }
}

UserSearchIndex.propTypes = {
  userResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasSearched: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default UserSearchIndex;
