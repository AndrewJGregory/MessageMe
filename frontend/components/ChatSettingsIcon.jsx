import React, { Fragment } from "react";

import DropdownMenuContainer from "./DropdownMenuContainer";
import PropTypes from "prop-types";

const ChatSettingsIcon = ({
  userId,
  setSelectedUserId,
  selectedUserId,
  isDropdownMenuOpen,
  openDropdownMenu,
}) => {
  const dropdown =
    isDropdownMenuOpen && userId === selectedUserId ? (
      <DropdownMenuContainer />
    ) : null;
  return (
    <Fragment>
      <i
        className="fa fa-cog small hidden"
        onClick={e => {
          e.stopPropagation();
          setSelectedUserId(userId);
          openDropdownMenu();
        }}
      />
      {dropdown}
    </Fragment>
  );
};

ChatSettingsIcon.propTypes = {
  isDropdownMenuOpen: PropTypes.bool,
  setSelectedUserId: PropTypes.func,
  openDropdownMenu: PropTypes.func,
  userId: PropTypes.number,
  selectedUserId: PropTypes.number,
};

export default ChatSettingsIcon;
