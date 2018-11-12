import { closeDropdownMenu, openModal, setSelectedUserId } from "../actions/ui";

import DropdownMenu from "./DropdownMenu";
import { archiveChat } from "../actions/chat";
import { connect } from "react-redux";
import { findChatId } from "../util/chat";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const { selectedUserId } = state.ui;
  const chatId = findChatId(state, selectedUserId, currentUserId);
  return { currentUserId, chatId };
};

const mapDispatchToProps = dispatch => {
  return {
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
    openModal: () => dispatch(openModal()),
    closeDropdownMenu: () => dispatch(closeDropdownMenu()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownMenu);
