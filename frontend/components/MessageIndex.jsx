import ChatWebSocketContainer from "./ChatWebSocketContainer";
import MessageIndexItem from "./MessageIndexItem";
import PropTypes from "prop-types";
import React from "react";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.bottom = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    const hasReceivedMessages = nextProps.messages.length > 0;
    const hasChatChanged =
      nextProps.match.params.userId !== this.props.match.params.userId;
    const hasZeroMessages =
      nextProps.messages.length === 0 && this.props.messages.length === 0;

    if (hasChatChanged) {
      this.setState({ isLoading: true });
    }

    if (hasReceivedMessages || hasZeroMessages) {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.messages.length > prevProps.messages.length)
      this.bottom.current.scrollIntoView();
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
    }

    return (
      <section className="messages scrollable">
        <ul>{messages}</ul>
        <div ref={this.bottom} />
        <div className="loader-container center">
          <div className={`${isLoadingClass}`} />
          <h6>{content}</h6>
        </div>
        <ChatWebSocketContainer cableApp={this.props.cableApp} />
      </section>
    );
  }
}

MessageIndex.propTypes = {
  chatId: PropTypes.number.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessageIndex;
