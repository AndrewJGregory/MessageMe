import { connect } from "react-redux";
import Main from "./Main";
import { fetchUserSignInData } from "../actions/user";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages, archiveChat } from "../actions/chat";
import { seeMessageBackend, redirectToChat } from "../actions/message";
import { closeDropdownMenu, closeModal, setSearchFocus } from "../actions/ui";

const mapStateToProps = state => {
  const currentUser = state.session.currentUser;
  return {
    currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserSignInData: currentUserId =>
      dispatch(fetchUserSignInData(currentUserId)),
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
    closeDropdownMenu: () => dispatch(closeDropdownMenu()),
    closeModal: () => dispatch(closeModal()),
    setSearchFocus: bool => dispatch(setSearchFocus(bool)),
    redirectToChat: userId => dispatch(redirectToChat(userId)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Main),
);
