import { connect } from "react-redux";
import Message from "./Message";
import { fetchMessages } from "../actions/message";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId);
  const currentUserId = parseInt(state.session.currentUser.id);
  let chatId = null;
  Object.values(state.entities.chat).forEach(chat => {
    if (
      (chat.user_id_one === userId && chat.user_id_two === currentUserId) ||
      (chat.user_id_one === currentUserId && chat.user_id_two === userId)
    ) {
      chatId = chat.id;
    }
  });

  return { chatId };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: chatId => dispatch(fetchMessages(chatId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Message)
);
