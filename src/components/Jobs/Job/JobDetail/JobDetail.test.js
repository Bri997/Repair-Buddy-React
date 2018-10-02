import React from "react";
import { shallow } from "enzyme";
import setupTest from "../../../../setupTest";

import { JobDetail } from "./JobDetail";

describe("<JobDetail />", () => {
  it("Renders without crashing", () => {
    shallow(<JobDetail />);
  });
});
