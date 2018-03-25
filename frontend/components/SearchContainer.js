import { connect } from "react-redux";
import Search from "./Search";
import { fetchUsers } from "../actions/search";
import { createChat } from "../actions/chat";
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
    fetchUsers: query => dispatch(fetchUsers(query)),
    createChat: (userIdOne, userIdTwo) =>
      dispatch(createChat(userIdOne, userIdTwo)),
    fetchMessages: chatId => dispatch(fetchMessages(chatId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
