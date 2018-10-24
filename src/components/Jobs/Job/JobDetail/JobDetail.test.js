import React from "react";
import { shallow } from "enzyme";
import setupTest from "../../../../setupTest";

import JobDetail from "./JobDetail.jsx";

import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
function success() {
  return {
    type: "FETCH_DATA_SUCCESS"
  };
}

function fetchData() {
  return dispatch => {
    return fetch("/users.json") // Some async action with promise
      .then(() => dispatch(success()));
  };
}

it("should execute fetch data", () => {
  const store = mockStore({});

  // Return the promise
  return store.dispatch(fetchData()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual(success());
  });
});

describe("<JobDetail />", () => {
  it("Renders without crashing", () => {
    shallow(<JobDetail />);
  });
});

//i have to fake the store redux mock store https://medium.com/netscape/testing-a-react-redux-app-using-jest-and-enzyme-b349324803a9
