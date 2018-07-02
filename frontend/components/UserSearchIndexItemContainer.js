import { connect } from "react-redux";
import UserSearchIndexItem from "./UserSearchIndexItem";
import { findChatId } from "../util/chat";
import { findMessages, sortByDate } from "../util/message";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages } from "../actions/chat";
import { clearSearchQuery } from "../actions/ui";
import { seeMessageBackend } from "../actions/message";

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.user.id;
  const currentUserId = state.session.currentUser.id;
  const chatId = findChatId(state, userId, currentUserId);
  const messages = findMessages(state, userId, currentUserId, chatId);
  sortByDate(messages);
  const mostRecentMessage = messages[messages.length - 1] || {};
  return {
    mostRecentMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    clearSearchQuery: () => dispatch(clearSearchQuery()),
    seeMessage: message => dispatch(seeMessageBackend(message))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserSearchIndexItem)
);
