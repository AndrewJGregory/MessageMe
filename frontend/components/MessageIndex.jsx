import React from "react";
import MessageIndexItem from "./MessageIndexItem";

const MessageIndex = props => {
  let type = null;
  const messages = props.messages.map(message => {
    type = message.isCurrentUserMessage ? "current" : "other";
    return <MessageIndexItem key={message.id} type={type} message={message} />;
  });

  return (
    <section className="messages">
      <ul>{messages}</ul>
    </section>
  );
};

export default MessageIndex;
