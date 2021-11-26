import React from "react";

import { render, fireEvent, act } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { Login, LoginFormTestIds } from "./Login";
import { Provider } from "react-redux";
import { store } from "../../store";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  it("вызов метода onSubmit по клику на кнопки", () => {
    const onSubmit = jest.fn();
    const component = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login onSubmit={onSubmit} />
        </BrowserRouter>
      </Provider>
    );

    act(() => {
      fireEvent.click(component.queryByTestId(LoginFormTestIds.submit));
    });

    expect(onSubmit).toBeCalled();
  });
});
