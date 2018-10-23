import React from "react";
import PropTypes from "prop-types";

const Modal = ({ isModalOpen }) => {
  if (!isModalOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">{"I am a modal"}</div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
};

export default Modal;
