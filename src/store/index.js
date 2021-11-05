import { profileReducer } from "./profile/reducer";
import { createStore } from "redux";

export const store = createStore(profileReducer);
