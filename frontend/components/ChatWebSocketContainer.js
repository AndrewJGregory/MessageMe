import { connect } from "react-redux";
import ChatWebSocket from "./ChatWebSocket";
import { withRouter } from "react-router-dom";
import { receiveMessage } from "../actions/message";
import { findChatId } from "../util/chat";

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
