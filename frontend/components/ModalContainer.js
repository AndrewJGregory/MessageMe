import { connect } from "react-redux";
import Modal from "./Modal";
import { findChatId } from "../util/chat";
import { archiveChat } from "../actions/chat";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  const { selectedUserId, isModalOpen } = state.ui;
  const chatId = findChatId(state, selectedUserId, currentUserId);
  return {
    isModalOpen,
    currentUserId,
    chatId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
