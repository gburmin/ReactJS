import { ADD_CHAT, REMOVE_CHAT, SET_CHATS } from "./actions";

const initialState = {
  chats: {},
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        chats: {
          ...state.chats,
          [action.payload.id]: action.payload,
        },
      };
    }
    case SET_CHATS: {
      return {
        chats: { ...action.payload },
      };
    }
    case REMOVE_CHAT: {
      if (!action.payload) {
        return state;
      }

      const chats = { ...state.chats };
      delete chats[action.payload];
      return {
        chats,
      };
    }
    default:
      return state;
  }
};
