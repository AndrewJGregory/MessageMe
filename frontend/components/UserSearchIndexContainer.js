import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserSearchIndex from "./UserSearchIndex";
import { sortByMostRecentlyMessaged } from "../util/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const userResults = Object.values(state.entities.users);
  const searchQuery = state.ui.searchQuery;
  sortByMostRecentlyMessaged(state, userResults);

  return {
    userResults,
    currentUserId,
    searchQuery
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(UserSearchIndex)
);
