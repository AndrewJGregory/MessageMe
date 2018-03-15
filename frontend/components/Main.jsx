import React from "react";
import Sidebar from "./Sidebar";
import MessagesAndInput from "./MessagesAndInput";

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <MessagesAndInput />
    </main>
  );
};

export default Main;
