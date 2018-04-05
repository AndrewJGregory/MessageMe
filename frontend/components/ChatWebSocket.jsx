import React from "react";

class ChatWebSocket extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.chatId) {
      nextProps.cableApp.chat = nextProps.cableApp.cable.subscriptions.create(
        {
          channel: "ChatChannel",
          chatId: nextProps.chatId
        },
        {
          received: newData => {
            console.log(newData.message);
            nextProps.receiveMessage(newData.message);
          }
        }
      );
    }
  }

  render() {
    return <div id="web-socket" />;
  }
}

export default ChatWebSocket;
