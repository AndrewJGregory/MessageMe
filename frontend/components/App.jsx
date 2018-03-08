import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInContainer from "./SignInContainer.js";
import MainContainer from "./MainContainer.js";
import { AuthRoute, ProtectedRoute } from "../util/route";

const App = () => (
  <main id="app">
    <Switch>
      <ProtectedRoute path="/messages" component={MainContainer} />
      <AuthRoute path="/:category" component={SignInContainer} />
      <AuthRoute path="/" component={SignInContainer} />
    </Switch>
  </main>
);

export default App;
