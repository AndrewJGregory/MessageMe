import { AuthRoute, ProtectedRoute } from "../util/route";
import { Route, Switch } from "react-router-dom";

import MainContainer from "./MainContainer";
import PropTypes from "prop-types";
import React from "react";
import SignInContainer from "./SignInContainer.js";

const App = ({ cableApp }) => {
  return (
    <main id="app">
      <Switch>
        <ProtectedRoute
          path="/messages/:userId"
          cableApp={cableApp}
          component={MainContainer}
        />
        <ProtectedRoute
          path="/messages/"
          cableApp={cableApp}
          component={MainContainer}
        />
        <AuthRoute path="/:category" component={SignInContainer} />
        <AuthRoute path="/" component={SignInContainer} />
      </Switch>
    </main>
  );
};

App.propTypes = {
  cableApp: PropTypes.object.isRequired,
};

export default App;
