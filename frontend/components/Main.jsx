import React from "react";
import Sidebar from "./Sidebar";
import Messages from "./Messages";
import MessageHeaderContainer from "./MessageHeaderContainer";
import MessageInputContainer from "./MessageInputContainer";

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="right-collection">
        <MessageHeaderContainer />
        <Messages />
        <MessageInputContainer />
      </div>
    </main>
  );
};

export default Main;
