import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { shallow, mount, render } from "enzyme";

import setupTest from "./setupTest";

describe("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Renders without crashing", () => {
  shallow(<App />);
});
