import { connect } from "react-redux";
import DropdownMenu from "./DropdownMenu";
import { findChatId } from "../util/chat";
import { archiveChat } from "../actions/chat";

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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownMenu);
