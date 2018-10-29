import { archiveChat, createChatAndFetchMessages } from "../actions/chat";
import { closeDropdownMenu, closeModal, setSearchFocus } from "../actions/ui";
import { redirectToChat, seeMessageBackend } from "../actions/message";

import Main from "./Main";
import { connect } from "react-redux";
import { fetchUserSignInData } from "../actions/user";
import { withRouter } from "react-router-dom";

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
