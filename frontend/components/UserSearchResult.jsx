import React from "react";

const UserSearchResult = ({ user }) => {
  return (
    <li className="user-search-result clickable" data-user-id={`${user.id}`}>
      {user.username}
    </li>
  );
};

export default UserSearchResult;
