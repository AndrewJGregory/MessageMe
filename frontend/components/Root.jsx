import App from "./App";
import { HashRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import React from "react";

const Root = ({ store, cableApp }) => (
  <Provider store={store}>
    <HashRouter>
      <App cableApp={cableApp} />
    </HashRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  cableApp: PropTypes.object.isRequired,
};

export default Root;
