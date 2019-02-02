import { archiveChat, createChatAndFetchMessages } from "../actions/chat";
import {
  clearSearchQuery,
  setSearchFocus,
  setSelectedUserIdx,
} from "../actions/ui";

import UserSearchIndexItem from "./UserSearchIndexItem";
import { connect } from "react-redux";
import { findMostRecentMessage } from "../util/message";
import { setMessageStatus } from "../actions/message";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.user.id;
  const mostRecentMessage = findMostRecentMessage(state, userId);
  const { selectedUserIdx, searchQuery } = state.ui;
  const currentUserId = state.session.currentUser.id;
  return {
    mostRecentMessage,
    selectedUserIdx,
    searchQuery,
    currentUserId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    clearSearchQuery: () => dispatch(clearSearchQuery()),
    setMessageStatus: (messageId, status) =>
      dispatch(setMessageStatus(messageId, status)),
    setSelectedUserIdx: idx => dispatch(setSelectedUserIdx(idx)),
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
    setSearchFocus: bool => dispatch(setSearchFocus(bool)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(UserSearchIndexItem),
);
