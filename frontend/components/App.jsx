import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInContainer from "./SignInContainer.js";
import MainContainer from "./MainContainer";
import { AuthRoute, ProtectedRoute } from "../util/route";

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

export default App;
