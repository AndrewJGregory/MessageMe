import React from "react";
import Search from "../components/Search";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Search userResults={[]} fetchUsers={jest.fn} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
