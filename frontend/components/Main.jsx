import MessageHeaderContainer from "./MessageHeaderContainer";
import MessageIndexContainer from "./MessageIndexContainer";
import MessageInputContainer from "./MessageInputContainer";
import ModalContainer from "./ModalContainer";
import PropTypes from "prop-types";
import React from "react";
import Sidebar from "./Sidebar";
import { redirectToChat } from "../util/chat";
import { sortByMostRecentlyMessaged } from "../util/message";

class Main extends React.Component {
  componentDidMount() {
    const currentUserId = this.props.currentUser.id;
    if (currentUserId)
      this.props.fetchUserSignInData(currentUserId).then(payload => {
        const state = {
          entities: payload,
          session: { currentUser: this.props.currentUser },
        };
        const users = Object.values(payload.users);
        sortByMostRecentlyMessaged(state, users);
        const userId = this.props.match.params.userId
          ? this.props.match.params.userId
          : users[0].id;
        const newUrl = `/messages/${userId}`;
        if (this.props.history.location.pathname !== newUrl) {
          this.props.history.push(newUrl);
        }
        this.props.redirectToChat(userId);
      });
  }

  render() {
    return (
      <main
        className="main-container"
        onClick={() => {
          this.props.closeDropdownMenu();
          this.props.closeModal();
          this.props.setSearchFocus(false);
        }}
      >
        <ModalContainer />
        <Sidebar />
        <div className="right-collection">
          <MessageHeaderContainer />
          <MessageIndexContainer cableApp={this.props.cableApp} />
          <MessageInputContainer cableApp={this.props.cableApp} />
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  fetchUserSignInData: PropTypes.func,
  archiveChat: PropTypes.func,
  closeDropdownMenu: PropTypes.func,
  closeModal: PropTypes.func,
  setSearchFocus: PropTypes.func,
  currentUser: PropTypes.object,
  cableApp: PropTypes.object,
};

export default Main;
