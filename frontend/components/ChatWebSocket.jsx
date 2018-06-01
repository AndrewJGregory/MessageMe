import React from "react";

class ChatWebSocket extends React.Component {
  componentWillReceiveProps(nextProps) {
    nextProps.chatIds.forEach(chatId => {
      if (typeof nextProps.cableApp.cable[`chat-${chatId}`] === "undefined") {
        nextProps.cableApp.cable[
          `chat-${chatId}`
        ] = nextProps.cableApp.cable.subscriptions.create(
          {
            channel: "ChatChannel",
            chatId
          },
          {
            received: payload => {
              nextProps.receiveMessage(payload.message);
              nextProps.receiveUser(payload.user);
              nextProps.receiveChat(payload.chat);
            }
          }
        );
      }
    });
  }

  render() {
    return <div id="web-socket" />;
  }
}

export default ChatWebSocket;
