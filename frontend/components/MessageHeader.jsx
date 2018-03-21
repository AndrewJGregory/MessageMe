import React from "react";

const MessageHeader = ({ username }) => {
  return (
    <div className="message-header center">
      <h2 className="message-header__username">{username}</h2>
    </div>
  );
};

export default MessageHeader;
