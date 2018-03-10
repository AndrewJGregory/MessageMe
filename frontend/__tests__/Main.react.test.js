import React from "react";
import Main from "../components/Main";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Has signout button", () => {
  const wrapper = shallow(<Main />);
  expect(wrapper.contains(<button>Sign Out</button>)).toBe(true);
});
