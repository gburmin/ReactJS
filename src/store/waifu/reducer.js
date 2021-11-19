import {
  STATUSES,
  GET_WAIFU_REQUEST,
  GET_WAIFU_SUCCESS,
  GET_WAIFU_FAILURE,
  GET_WAIFU_DELETE,
} from "./actions";

const initialState = {
  waifus: [],
  request: STATUSES.IDLE,
  error: null,
};

export const waifusReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WAIFU_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
      };
    case GET_WAIFU_SUCCESS:
      return {
        ...state,
        waifus: [...state.waifus, action.payload],
        request: STATUSES.SUCCESS,
        error: null,
      };
    case GET_WAIFU_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
      };
    case GET_WAIFU_DELETE:
      return {
        ...state,
        waifus: action.payload,
        request: STATUSES.SUCCESS,
        error: action.payload,
      };
    default:
      return state;
  }
};
