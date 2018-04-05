import { connect } from "react-redux";
import ChatWebSocket from "./ChatWebSocket";
import { withRouter } from "react-router-dom";
import { receiveMessage } from "../actions/message";

const findChatId = (state, userId, currentUserId) => {
  let chatId = 0;
  Object.values(state.entities.chats).forEach(chat => {
    if (
      (chat.user_id_one === userId && chat.user_id_two === currentUserId) ||
      (chat.user_id_one === currentUserId && chat.user_id_two === userId)
    ) {
      chatId = chat.id;
    }
  });
  return chatId;
};

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const currentUserId = parseInt(state.session.currentUser.id);
  const chatId = findChatId(state, userId, currentUserId);
  return { chatId, currentUserId, userId };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ChatWebSocket)
);
