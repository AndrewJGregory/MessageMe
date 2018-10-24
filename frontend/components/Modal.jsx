import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isModalOpen, archiveChat, chatId, currentUserId }) => {
  if (!isModalOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="header-container">
          <h3>{"Delete Conversation"}</h3>
          <h4>{"This will permanently delete the conversation history."}</h4>
        </div>
        <ul>
          <li className="yellow clickable">{"Cancel"}</li>
          <li className="red clickable">{"Delete"}</li>
          <li
            className="red clickable"
            onClick={() => archiveChat(chatId, currentUserId, true)}
          >
            {"Archive"}
          </li>
        </ul>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  currentUserId: PropTypes.number,
  chatId: PropTypes.number,
  archiveChat: PropTypes.func,
};

export default Modal;