import { CHANGE_NAME } from "./actions";

const initialState = {
  name: "Default username",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
