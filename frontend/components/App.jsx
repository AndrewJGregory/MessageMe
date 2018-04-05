import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInContainer from "./SignInContainer.js";
import Main from "./Main";
import { AuthRoute, ProtectedRoute } from "../util/route";

const App = ({ cableApp }) => {
  return (
    <main id="app">
      <Switch>
        <ProtectedRoute
          path="/messages/:userId"
          cableApp={cableApp}
          component={Main}
        />
        <ProtectedRoute
          path="/messages/"
          cableApp={cableApp}
          component={Main}
        />
        <AuthRoute path="/:category" component={SignInContainer} />
        <AuthRoute path="/" component={SignInContainer} />
      </Switch>
    </main>
  );
};

export default App;
