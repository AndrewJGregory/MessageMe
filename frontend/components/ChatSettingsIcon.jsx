import React, { Fragment } from "react";
import DropdownMenuContainer from "./DropdownMenuContainer";

const ChatSettingsIcon = ({ userId, setSelectedUserId, selectedUserId }) => {
  const dropdown = userId === selectedUserId ? <DropdownMenuContainer /> : null;
  return (
    <Fragment>
      <i
        className="fa fa-cog"
        onClick={e => {
          e.stopPropagation();
          setSelectedUserId(userId);
        }}
      />
      {dropdown}
    </Fragment>
  );
};

export default ChatSettingsIcon;
