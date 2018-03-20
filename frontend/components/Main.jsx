import React from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import MessageHeaderContainer from "./MessageHeaderContainer";

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <MessageHeaderContainer />
      <Messages />
    </main>
  );
};

export default Main;
