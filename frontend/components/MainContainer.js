import { connect } from "react-redux";
import Main from "./Main";
import { fetchUserSignInData } from "../actions/user";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages } from "../actions/chat";

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserSignInData: currentUserId =>
      dispatch(fetchUserSignInData(currentUserId)),
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
