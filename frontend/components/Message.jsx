import React from "react";

export default class Messages extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.chatId) nextProps.fetchMessages(nextProps.chatId);
  }

  render() {
    return <section className="messages" />;
  }
}
