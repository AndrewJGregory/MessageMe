import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserSearchIndex from "./UserSearchIndex";
import { sortByMostRecentlyMessaged } from "../util/message";
import { findChatId } from "../util/chat";
import { createChatAndFetchMessages } from "../actions/chat";
import { seeMessageBackend } from "../actions/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const userResults = Object.values(state.entities.users);
  const searchQuery = state.ui.searchQuery;
  sortByMostRecentlyMessaged(state, userResults);
  const { hasSearched } = state.ui;
  userResults.forEach(user => {
    const chatId = findChatId(state, user.id, currentUserId);
    const isArchivedObj = state.entities.chats[chatId].isArchived || {};
    const isArchived = isArchivedObj[currentUserId];
    user["isChatArchived"] = isArchived;
  });
  return {
    userResults,
    currentUserId,
    searchQuery,
    hasSearched,
    state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    seeMessage: message => dispatch(seeMessageBackend(message)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserSearchIndex),
);
