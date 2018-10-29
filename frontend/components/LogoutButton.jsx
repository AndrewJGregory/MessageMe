import PropTypes from "prop-types";
import React from "react";

const LogoutButton = ({ signOut }) => {
  return (
    <button onClick={signOut} className="sign-out-btn clickable truncate">
      Log Out
    </button>
  );
};

LogoutButton.propTypes = {
  signOut: PropTypes.func,
};

export default LogoutButton;
