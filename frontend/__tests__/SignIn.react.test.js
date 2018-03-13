import React from "react";
import SignIn from "../components/SignIn";
import renderer from "react-test-renderer";
import { HashRouter } from "react-router-dom";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <HashRouter>
        <SignIn
          currentUser={{}}
          buttonText="sign in"
          errors={{}}
          clearErrors={jest.fn}
        />
      </HashRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
