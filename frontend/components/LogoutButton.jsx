import React from "react";

const LogoutButton = ({ signOut }) => {
  return (
    <button onClick={signOut} className="sign-out-btn clickable truncate">
      Log Out
    </button>
  );
};

export default LogoutButton;
