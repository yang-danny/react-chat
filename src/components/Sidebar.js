import React from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <div className="side-right">
      <Search/>
      <Chats/>
      </div>
    </div>
  );
};

export default Sidebar;