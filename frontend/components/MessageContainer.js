import { connect } from "react-redux";
import Message from "./Message";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const currentUserId = parseInt(state.session.currentUser.id);
  let chatId = 0;
  let currentUserMessages = [];
  let otherUserMessages = [];
  Object.values(state.entities.chats).forEach(chat => {
    if (
      (chat.user_id_one === userId && chat.user_id_two === currentUserId) ||
      (chat.user_id_one === currentUserId && chat.user_id_two === userId)
    ) {
      chatId = chat.id;
    }
  });

  if (chatId) {
    Object.values(state.entities.messages).forEach(message => {
      if (message.chat_id === chatId && message.user_id === currentUserId) {
        currentUserMessages.push(message);
      } else if (message.chat_id === chatId && message.user_id === userId) {
        otherUserMessages.push(message);
      }
    });
  }

  return { chatId, currentUserMessages, otherUserMessages };
};

export default withRouter(connect(mapStateToProps, null)(Message));
