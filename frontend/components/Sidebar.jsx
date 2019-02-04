import React from "react";
import SearchContainer from "./SearchContainer";
import SidebarHeaderContainer from "./SidebarHeaderContainer";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarHeaderContainer />
      <SearchContainer />
    </aside>
  );
};

export default Sidebar;
