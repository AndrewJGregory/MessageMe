import React from "react";
import MessagesAndInput from "../components/MessagesAndInput";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<MessagesAndInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
