import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import actionCable from "actioncable";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    store = configureStore({ session: { currentUser: window.currentUser } });
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const cableApp = {};
  const url =
    process.env.NODE_ENV === "production"
      ? "wss://messagemeajg.herokuapp.com/cable"
      : `ws://${window.location.hostname}:3000/cable`;
  cableApp.cable = actionCable.createConsumer(url);
  ReactDOM.render(<Root store={store} cableApp={cableApp} />, root);
});
