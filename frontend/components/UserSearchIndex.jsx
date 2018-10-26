import React from "react";
import UserSearchIndexItemContainer from "./UserSearchIndexItemContainer";
import PropTypes from "prop-types";
import { findMostRecentMessage } from "../util/message";

class UserSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.shouldBeShown = this.shouldBeShown.bind(this);
  }

  componentDidUpdate(prevProps) {
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
      this.props.createChatAndFetchMessages(userId);
      const mostRecentMessage = findMostRecentMessage(this.props.state, userId);
      if (mostRecentMessage.id) this.props.seeMessage(mostRecentMessage);
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
        <li className="hidden" />
      </ul>
    );
  }
}

UserSearchIndex.propTypes = {
  userResults: PropTypes.arrayOf(PropTypes.object),
  hasSearched: PropTypes.bool,
  currentUserId: PropTypes.number,
  searchQuery: PropTypes.string,
  createChatAndFetchMessages: PropTypes.func,
  seeMessage: PropTypes.func,
};

export default UserSearchIndex;
