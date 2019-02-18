import React, { Fragment } from "react";

import HeaderDropdownMenuContainer from "./HeaderDropdownMenuContainer";
import PropTypes from "prop-types";

const SidebarHeader = ({ openDropdownMenu, dropdownMenuType }) => {
  const dropdownMenu =
    dropdownMenuType === "header" ? <HeaderDropdownMenuContainer /> : null;
  return (
    <div className="sidebar-header-container">
      <i
        className="fa fa-cog medium"
        onClick={e => {
          e.stopPropagation();
          openDropdownMenu("header");
        }}
      />
      {dropdownMenu}
      <div className="sidebar__header">MessageMe</div>
      <i className="fa fa-edit" />
    </div>
  );
};

SidebarHeader.propTypes = {
  openDropdownMenu: PropTypes.func.isRequired,
  dropdownMenuType: PropTypes.string,
};

export default SidebarHeader;
