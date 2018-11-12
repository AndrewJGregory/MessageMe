import { findMessages, sortByDate } from "../util/message";

import MessageIndex from "./MessageIndex";
import { connect } from "react-redux";
import { findChatId } from "../util/chat";
import { withRouter } from "react-router-dom";

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

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(MessageIndex),
);
