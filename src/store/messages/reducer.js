import {
  ADD_MESSAGE,
  REMOVE_MESSAGES_BY_CHAT_ID,
  CHANGE_MESSAGES,
} from "./actions";

const initialState = {
  messages: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const { message, chatId } = action.payload;

      const newMessages = { ...state.messages };
      newMessages[chatId] = {
        ...(newMessages[chatId] || {}),
        [message.id]: message,
      };

      return {
        messages: newMessages,
      };
    }

    case CHANGE_MESSAGES: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.chatId]: action.payload.messages,
        },
      };
    }

    case REMOVE_MESSAGES_BY_CHAT_ID: {
      if (!state.messages.hasOwnProperty(action.payload)) {
        return state;
      }

      const newMessages = { ...state.messages };
      delete newMessages[action.payload];

      return {
        messages: newMessages,
      };
    }

    default:
      return state;
  }
};
