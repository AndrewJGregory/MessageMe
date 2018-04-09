import React from "react";

const UserSearchIndexItem = ({ user }) => {
  return (
    <li
      className="user-search-result clickable truncate"
      data-user-id={`${user.id}`}
    >
      {user.username}
    </li>
  );
};

export default UserSearchIndexItem;
