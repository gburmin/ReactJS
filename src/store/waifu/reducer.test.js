import { waifusReducer } from "./reducer";

describe("reducer test", () => {
  it("Возврат дефолтного значения при диспатче несуществующего экшна", () => {
    const expected = {
      waifus: [],
      request: 0,
      error: null,
    };
    const randomAction = { type: "data" };
    const received = waifusReducer(undefined, randomAction);
    expect(received).toEqual(expected);
  });
});
