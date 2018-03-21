import React from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import MessageHeaderContainer from "./MessageHeaderContainer";

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="right-collection">
        <MessageHeaderContainer />
        <Messages />
      </div>
    </main>
  );
};

export default Main;
