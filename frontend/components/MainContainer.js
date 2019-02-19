import { archiveChat, createChatAndFetchMessages } from "../actions/chat";
import {
  clearSearchQuery,
  closeDropdownMenu,
  closeModal,
  setSearchFocus,
} from "../actions/ui";

import Main from "./Main";
import { connect } from "react-redux";
import { fetchUserSignInData } from "../actions/user";
import { redirectToChat } from "../actions/message";
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
    clearSearchQuery: () => dispatch(clearSearchQuery()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Main),
);
