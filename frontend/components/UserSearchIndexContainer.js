import UserSearchIndex from "./UserSearchIndex";
import { connect } from "react-redux";
import { createChatAndFetchMessages } from "../actions/chat";
import { findChatId } from "../util/chat";
import { redirectToChat } from "../actions/message";
import { sortByMostRecentlyMessaged } from "../util/message";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const userResults = Object.values(state.entities.users);
  const archiveChats = Object.values(state.entities.archiveChats);
  const searchQuery = state.ui.searchQuery;
  sortByMostRecentlyMessaged(state, userResults);
  const { hasSearched } = state.ui;
  userResults.forEach(user => {
    const chatId = findChatId(state, user.id, currentUserId);
    const archiveChat = archiveChats.find(
      archiveChat => archiveChat.chat_id === chatId,
    );
    user["isChatArchived"] = Boolean(archiveChat) && archiveChat.is_archived;
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
