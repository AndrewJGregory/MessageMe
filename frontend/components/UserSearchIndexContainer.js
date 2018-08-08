import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserSearchIndex from "./UserSearchIndex";
import { sortByMostRecentlyMessaged } from "../util/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const userResults = Object.values(state.entities.users);
  const searchQuery = state.ui.searchQuery;
  const currentUserCount = Object.keys(state.entities.users).length;
  sortByMostRecentlyMessaged(state, userResults);
  const { hasSearched } = state.ui;

  return {
    userResults,
    currentUserId,
    searchQuery,
    currentUserCount,
    hasSearched
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(UserSearchIndex)
);
