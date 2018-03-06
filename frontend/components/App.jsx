import React from "react";
import { Route, Switch } from "react-router-dom";
import SignInContainer from "./SignInContainer";

const App = () => (
  <main id="app">
    <Route path="/:category" component={SignInContainer} />
  </main>
);

export default App;
