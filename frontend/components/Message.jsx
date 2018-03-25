import React from "react";

const Messages = props => {
  const currentUserMessages = props.currentUserMessages.map(message => {
    return (
      <li key={message.id} className="current-user-msg">
        {message.content}
      </li>
    );
  });

  const otherUserMessages = props.otherUserMessages.map(message => {
    return (
      <li key={message.id} className="other-user-msg">
        {message.content}
      </li>
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

export default Messages;
