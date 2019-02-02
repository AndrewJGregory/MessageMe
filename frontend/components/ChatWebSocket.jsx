import PropTypes from "prop-types";
import React from "react";

class ChatWebSocket extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      typeof nextProps.cableApp.cable[`chat-${nextProps.selfChatId}`] ===
      "undefined"
    ) {
      nextProps.cableApp.cable[
        `chat-${nextProps.selfChatId}`
      ] = nextProps.cableApp.cable.subscriptions.create(
        {
          channel: "ChatChannel",
          chatId: nextProps.selfChatId,
        },
        {
          received: payload => {
            nextProps.receiveMessagePayload(payload);
            const message = Object.values(payload.message)[0];
            const isCurrentlyChattingWithUser =
              this.props.match.params.userId == Object.keys(payload.user)[0];
            const shouldMessageBeSeen =
              isCurrentlyChattingWithUser && !message.is_seen;
            if (shouldMessageBeSeen) {
              this.props.setMessageStatus(message.id, true);
            }
          },
        },
      );
    }
  }

  render() {
    return <div id="web-socket" />;
  }
}

ChatWebSocket.propTypes = {
  selfChatId: PropTypes.number,
  receiveMessage: PropTypes.func,
  receiveUser: PropTypes.func,
  receiveChat: PropTypes.func,
  setMessageStatus: PropTypes.func,
  receiveMessagePayload: PropTypes.func,
};

export default ChatWebSocket;
