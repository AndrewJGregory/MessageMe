import React from "react";
import SearchContainer from "./SearchContainer";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <SearchContainer />
    </aside>
  );
};

export default Sidebar;
