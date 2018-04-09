import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserSearchIndex from "./UserSearchIndex";
import { createChat, createChatAndFetchMessages } from "../actions/chat";
import { fetchMessages } from "../actions/message";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  return {
    userResults: Object.values(state.search.users),
    currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChat: (userIdOne, userIdTwo) =>
      dispatch(createChat(userIdOne, userIdTwo)),
    fetchMessages: chatId => dispatch(fetchMessages(chatId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserSearchIndex)
);
