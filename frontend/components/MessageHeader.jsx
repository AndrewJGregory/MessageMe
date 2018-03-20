import React from "react";

const MessageHeader = ({ username }) => {
  return (
    <div className="message-header">
      <h2>{username}</h2>
    </div>
  );
};

export default MessageHeader;
