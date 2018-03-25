import React from "react";
import Sidebar from "./Sidebar";
import MessageIndexContainer from "./MessageIndexContainer";
import MessageHeaderContainer from "./MessageHeaderContainer";
import MessageInputContainer from "./MessageInputContainer";

const Main = () => {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="right-collection">
        <MessageHeaderContainer />
        <MessageIndexContainer />
        <MessageInputContainer />
      </div>
    </main>
  );
};

export default Main;
