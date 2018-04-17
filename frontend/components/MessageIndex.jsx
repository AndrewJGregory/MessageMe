import React from "react";
import MessageIndexItem from "./MessageIndexItem";
import ChatWebSocketContainer from "./ChatWebSocketContainer";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentWillReceiveProps(nextProps) {
    const hasReceivedMessages = nextProps.messages.length > 0;
    const hasChatChanged =
      nextProps.match.params.userId !== this.props.match.params.userId;
    const hasZeroMessages =
      nextProps.messages.length === 0 &&
      this.props.messages.length === 0 &&
      this.props.chatId === nextProps.chatId;
    if (hasReceivedMessages || hasZeroMessages) {
      this.setState({ isLoading: false });
    }

    if (hasChatChanged) {
      this.setState({ isLoading: true });
    }
  }

  render() {
    let type = null;
    const messages = this.props.messages.map(message => {
      type = message.isCurrentUserMessage ? "current" : "other";
      return (
        <MessageIndexItem key={message.id} type={type} message={message} />
      );
    });
    let isLoadingClass = "";
    let content = null;
    if (this.state.isLoading) {
      isLoadingClass = "loader";
      content = "Fetching messages...";
    } else {
      isLoadingClass = "";
      content = null;
    }

    return (
      <section className="messages scrollable">
        <ul>{messages}</ul>
        <div className="loader-container center">
          <div className={`${isLoadingClass}`} />
          <h6>{content}</h6>
        </div>
        <ChatWebSocketContainer cableApp={this.props.cableApp} />
      </section>
    );
  }
}

export default MessageIndex;
