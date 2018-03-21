import { connect } from "react-redux";
import Search from "./Search";
import { fetchUsers } from "../actions/search";
import { createChat } from "../actions/chat";

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
      dispatch(createChat(userIdOne, userIdTwo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
