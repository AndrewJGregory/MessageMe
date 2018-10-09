import React from "react";
import Sidebar from "./Sidebar";
import MessageIndexContainer from "./MessageIndexContainer";
import MessageHeaderContainer from "./MessageHeaderContainer";
import MessageInputContainer from "./MessageInputContainer";
import { redirectToChat } from "../util/chat";
import {
  sortByMostRecentlyMessaged,
  findMostRecentMessage,
} from "../util/message";

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
        this.props.history.push(`/messages/${userId}`);
        this.props.createChatAndFetchMessages(userId);
        const mostRecentMessage = findMostRecentMessage(state, userId);
        if (mostRecentMessage.id) this.props.seeMessage(mostRecentMessage);
      });
  }

  render() {
    return (
      <main className="main-container">
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

export default Main;
