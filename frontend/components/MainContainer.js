import { connect } from "react-redux";
import Main from "./Main";
import { fetchUserSignInData } from "../actions/user";
import { withRouter } from "react-router-dom";
import { createChatAndFetchMessages, archiveChat } from "../actions/chat";
import { seeMessageBackend } from "../actions/message";
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
    createChatAndFetchMessages: id => dispatch(createChatAndFetchMessages(id)),
    seeMessage: message => dispatch(seeMessageBackend(message)),
    archiveChat: (chatId, userId, status) =>
      dispatch(archiveChat(chatId, userId, status)),
    closeDropdownMenu: () => dispatch(closeDropdownMenu()),
    closeModal: () => dispatch(closeModal()),
    setSearchFocus: bool => dispatch(setSearchFocus(bool)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Main),
);
