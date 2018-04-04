import { connect } from "react-redux";
import MessageIndex from "./MessageIndex";
import { withRouter } from "react-router-dom";

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

const findMessages = (state, userId, currentUserId, chatId) => {
  let messages = [];
  let newMessage = null;
  Object.values(state.entities.messages).forEach(message => {
    newMessage = null;
    if (message.chat_id === chatId && message.user_id === currentUserId) {
      newMessage = Object.assign({}, message, {
        isCurrentUserMessage: true
      });
    } else if (message.chat_id === chatId && message.user_id === userId)
      newMessage = Object.assign({}, message, {
        isCurrentUserMessage: false
      });
    if (newMessage) messages.push(newMessage);
  });
  return messages;
};

const sortByDate = messages => {
  return messages.sort(
    (dateOne, dateTwo) => new Date(dateOne) > new Date(dateTwo)
  );
};

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const currentUserId = parseInt(state.session.currentUser.id);
  let chatId = findChatId(state, userId, currentUserId);
  let messages = [];

  if (chatId) {
    messages = findMessages(state, userId, currentUserId, chatId);
  }

  sortByDate(messages);
  return { messages, chatId };
};

export default withRouter(connect(mapStateToProps, null)(MessageIndex));
