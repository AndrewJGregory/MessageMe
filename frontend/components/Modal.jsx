import PropTypes from "prop-types";
import React from "react";

const Modal = ({
  isModalOpen,
  archiveChat,
  chatId,
  currentUserId,
  deleteChat,
}) => {
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
          <li className="red clickable" onClick={() => deleteChat(chatId)}>
            {"Delete"}
          </li>
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
  isModalOpen: PropTypes.bool.isRequired,
  currentUserId: PropTypes.number.isRequired,
  chatId: PropTypes.number.isRequired,
  archiveChat: PropTypes.func.isRequired,
  deleteChat: PropTypes.func.isRequired,
};

export default Modal;
