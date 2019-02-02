import { closeDropdownMenu, openModal, setSelectedUserId } from "../actions/ui";

import DropdownMenu from "./DropdownMenu";
import { archiveChat } from "../actions/chat";
import { connect } from "react-redux";
import { findChatId } from "../util/chat";
import { findMostRecentMessage } from "../util/message";
import { setMessageStatus } from "../actions/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const { selectedUserId } = state.ui;
  const chatId = findChatId(state, selectedUserId, currentUserId);
  const mostRecentMessageId = findMostRecentMessage(state, selectedUserId).id;
  return { currentUserId, chatId, mostRecentMessageId };
};

const mapDispatchToProps = dispatch => {
  return {
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
    openModal: () => dispatch(openModal()),
    closeDropdownMenu: () => dispatch(closeDropdownMenu()),
    setMessageStatus: (messageId, status) =>
      dispatch(setMessageStatus(messageId, status)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownMenu);
