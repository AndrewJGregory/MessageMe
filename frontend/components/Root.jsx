import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";

const Root = ({ store, cableApp }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={cableApp} />
    </HashRouter>
  </Provider>
);

export default Root;
