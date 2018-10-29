import { redirectToChat, seeMessageBackend } from "../actions/message";

import UserSearchIndex from "./UserSearchIndex";
import { connect } from "react-redux";
import { createChatAndFetchMessages } from "../actions/chat";
import { findChatId } from "../util/chat";
import { sortByMostRecentlyMessaged } from "../util/message";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const userResults = Object.values(state.entities.users);
  const searchQuery = state.ui.searchQuery;
  sortByMostRecentlyMessaged(state, userResults);
  const { hasSearched } = state.ui;
  userResults.forEach(user => {
    const chatId = findChatId(state, user.id, currentUserId);
    const isArchivedObj =
      state.entities.chats || state.entities.chats[chatId].isArchived || {};
    const isArchived = isArchivedObj[currentUserId];
    user["isChatArchived"] = isArchived;
  });
  return {
    userResults,
    searchQuery,
    hasSearched,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    redirectToChat: userId => dispatch(redirectToChat(userId)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserSearchIndex),
);
