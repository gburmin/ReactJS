import React from "react";

import { render, fireEvent, act } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Profile, ProfileTestIds } from "./Profile";
import { Provider } from "react-redux";
import { store } from "../../../store";

describe("Profile", () => {
  it("вызов метода onClick по клику на кнопку", () => {
    const onClick = jest.fn();
    const component = render(
      <Provider store={store}>
        <Profile onClick={onClick} />
      </Provider>
    );

    act(() => {
      fireEvent.click(component.queryByTestId(ProfileTestIds.click));
    });

    expect(onClick).toBeCalled();
  });
});
