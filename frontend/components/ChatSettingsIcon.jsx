import React, { Fragment } from "react";

import PropTypes from "prop-types";
import UserDropdownMenuContainer from "./UserDropdownMenuContainer";

const ChatSettingsIcon = ({
  userId,
  setSelectedUserId,
  selectedUserId,
  dropdownMenuType,
  openDropdownMenu,
}) => {
  const dropdown =
    dropdownMenuType === "user" && userId === selectedUserId ? (
      <UserDropdownMenuContainer />
    ) : null;
  return (
    <Fragment>
      <i
        className="fa fa-cog small hidden"
        onClick={e => {
          e.stopPropagation();
          setSelectedUserId(userId);
          openDropdownMenu("user");
        }}
      />
      {dropdown}
    </Fragment>
  );
};

ChatSettingsIcon.propTypes = {
  dropdownMenuType: PropTypes.string,
  setSelectedUserId: PropTypes.func,
  openDropdownMenu: PropTypes.func,
  userId: PropTypes.number,
  selectedUserId: PropTypes.number,
};

export default ChatSettingsIcon;
