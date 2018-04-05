import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import configureStore from "./store/store";
import actionCable from "actioncable";

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
  cableApp.cable = actionCable.createConsumer(
    `ws://${window.location.hostname}:3000/cable`
  );
  ReactDOM.render(<Root store={store} cableApp={cableApp} />, root);
});
