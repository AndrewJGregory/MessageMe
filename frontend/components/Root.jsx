import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";

const Root = ({ store, cableApp }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={cableApp} />
    </HashRouter>
  </Provider>
);

export default Root;
