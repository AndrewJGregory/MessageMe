import { connect } from "react-redux";
import UserSearchIndexItem from "./UserSearchIndexItem";
import { findMostRecentMessage } from "../util/message";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages, archiveChat } from "../actions/chat";
import { clearSearchQuery, setSelectedUserIdx } from "../actions/ui";
import { seeMessageBackend } from "../actions/message";
import { findChatId } from "../util/chat";

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.user.id;
  const currentUserId = state.session.currentUser.id;
  const chatId = findChatId(state, userId, currentUserId);
  const isArchivedObj = state.entities.chats[chatId].isArchived || {};
  const isArchived = isArchivedObj[currentUserId];
  const mostRecentMessage = findMostRecentMessage(state, userId);
  const { selectedUserIdx, searchQuery } = state.ui;
  return {
    mostRecentMessage,
    selectedUserIdx,
    isArchived,
    searchQuery
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    clearSearchQuery: () => dispatch(clearSearchQuery()),
    seeMessage: message => dispatch(seeMessageBackend(message)),
    setSelectedUserIdx: idx => dispatch(setSelectedUserIdx(idx)),
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserSearchIndexItem)
);
