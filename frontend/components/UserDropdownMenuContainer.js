import { closeDropdownMenu, openModal, setSelectedUserId } from "../actions/ui";
import { findMessageStatus, findMostRecentMessage } from "../util/message";

import UserDropdownMenu from "./UserDropdownMenu";
import { archiveChat } from "../actions/chat";
import { connect } from "react-redux";
import { findChatId } from "../util/chat";
import { setMessageStatus } from "../actions/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const { selectedUserId } = state.ui;
  const chatId = findChatId(state, selectedUserId, currentUserId);
  const mostRecentMessage = findMostRecentMessage(state, selectedUserId);
  const mostRecentMessageStatusId = findMessageStatus(state, mostRecentMessage)
    .id;
  return { currentUserId, mostRecentMessageStatusId };
};

const mapDispatchToProps = dispatch => {
  return {
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
    openModal: () => dispatch(openModal()),
    closeDropdownMenu: () => dispatch(closeDropdownMenu()),
    setMessageStatus: (messageStatusId, status) =>
      dispatch(setMessageStatus(messageStatusId, status)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDropdownMenu);
