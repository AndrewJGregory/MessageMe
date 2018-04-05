import React from "react";
import Sidebar from "./Sidebar";
import MessageIndexContainer from "./MessageIndexContainer";
import MessageHeaderContainer from "./MessageHeaderContainer";
import MessageInputContainer from "./MessageInputContainer";

const Main = props => {
  return (
    <main className="main-container">
      <Sidebar />
      <div className="right-collection">
        <MessageHeaderContainer />
        <MessageIndexContainer cableApp={props.cableApp} />
        <MessageInputContainer />
      </div>
    </main>
  );
};

export default Main;
