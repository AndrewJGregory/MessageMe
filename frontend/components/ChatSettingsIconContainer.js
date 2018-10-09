import { connect } from "react-redux";
import ChatSettingsIcon from "./ChatSettingsIcon";
import { findChatId } from "../util/chat";
import { archiveChat } from "../actions/chat";

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const chatId = findChatId(state, ownProps.userId, currentUserId);
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChatSettingsIcon);
