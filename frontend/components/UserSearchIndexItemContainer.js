import { connect } from "react-redux";
import UserSearchIndexItem from "./UserSearchIndexItem";
import { findMostRecentMessage } from "../util/message";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages, archiveChat } from "../actions/chat";
import {
  clearSearchQuery,
  setSelectedUserIdx,
  setSearchFocus,
} from "../actions/ui";
import { seeMessageBackend } from "../actions/message";

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
    seeMessage: message => dispatch(seeMessageBackend(message)),
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
