import PropTypes from "prop-types";
import React from "react";

const HeaderDropdownMenu = ({ signOut }) => {
  return (
    <ul id="header-dropdown-menu" className="dropdown-menu">
      <li className="clickable" onClick={signOut}>
        {"Log Out"}
      </li>
    </ul>
  );
};

HeaderDropdownMenu.propTypes = {
  signOut: PropTypes.func,
};

export default HeaderDropdownMenu;
