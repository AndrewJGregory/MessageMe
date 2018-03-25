import React from "react";

const MessageIndexItem = ({ message, type }) => {
  return <li className={`${type}-user-msg`}>{message.content}</li>;
};

export default MessageIndexItem;
