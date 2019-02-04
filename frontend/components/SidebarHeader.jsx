import React, { Fragment } from "react";

import PropTypes from "prop-types";

const SidebarHeader = ({ openDropdownMenu }) => {
  return (
    <div className="sidebar-header-container">
      <i
        className="fa fa-cog medium"
        onClick={() => openDropdownMenu("header")}
      />
      <div className="sidebar__header">MessageMe</div>
      <i className="fa fa-edit" />
    </div>
  );
};

SidebarHeader.propTypes = {
  openDropdownMenu: PropTypes.func,
};

export default SidebarHeader;
