import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserSearchIndex from "./UserSearchIndex";
import { createChatAndFetchMessages } from "../actions/chat";
import { sortByMostRecentlyMessaged } from "../util/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const userResults = Object.values(state.entities.users);
  sortByMostRecentlyMessaged(state, userResults);
  return {
    userResults,
    currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserSearchIndex)
);
