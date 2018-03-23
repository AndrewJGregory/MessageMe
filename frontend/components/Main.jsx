import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import MessageHeaderContainer from "./MessageHeaderContainer";
import MessageInputContainer from "./MessageInputContainer";

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="right-collection">
        <MessageHeaderContainer />
        <MessageContainer />
        <MessageInputContainer />
      </div>
    </main>
  );
};

export default Main;
