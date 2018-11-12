import PropTypes from "prop-types";
import React from "react";

const MessageIndexItem = ({ message, type }) => {
  return <li className={`${type}-user-msg`}>{message.content}</li>;
};

MessageIndexItem.propTypes = {
  message: PropTypes.object,
  type: PropTypes.string,
};

export default MessageIndexItem;
