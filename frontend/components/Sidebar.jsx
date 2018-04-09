import React from "react";
import SearchContainer from "./SearchContainer";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header center truncate">MessageMe</div>
      <SearchContainer />
    </aside>
  );
};

export default Sidebar;
