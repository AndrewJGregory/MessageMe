import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserSearchIndex from "./UserSearchIndex";
import { createChatAndFetchMessages } from "../actions/chat";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUser.id;
  return {
    userResults: Object.values(state.search.users),
    currentUserId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserSearchIndex)
);
