import React from "react";
import MessageIndexItem from "./MessageIndexItem";

const MessageIndex = props => {
  const currentUserMessages = props.currentUserMessages.map(message => {
    return (
      <MessageIndexItem key={message.id} type={"current"} message={message} />
    );
  });

  const otherUserMessages = props.otherUserMessages.map(message => {
    return (
      <MessageIndexItem key={message.id} type={"other"} message={message} />
    );
  });

  return (
    <section className="messages">
      <ul>
        {currentUserMessages}
        {otherUserMessages}
      </ul>
    </section>
  );
};

export default MessageIndex;
