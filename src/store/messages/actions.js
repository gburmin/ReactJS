import { createMessage } from "../../helpers";
import { BOT_AUTHOR } from "../../helpers/constants";

export const ADD_MESSAGE = "ADD_MESSAGE";
export const REMOVE_MESSAGES_BY_CHAT_ID = "REMOVE_MESSAGES_BY_CHAT_ID";

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  payload: {
    message,
    chatId,
  },
});

export const removeMessagesByChatId = (chatId) => ({
  type: REMOVE_MESSAGES_BY_CHAT_ID,
  payload: chatId,
});

export const sendMessageWithThunk = (author, message, chatId) => (dispatch) => {
  const userMessage = createMessage(author, message);
  dispatch(addMessage(userMessage, chatId));
  if (author === BOT_AUTHOR) {
    return;
  }

  const botMessage = createMessage(BOT_AUTHOR, "hi");

  dispatch(addMessage(botMessage, chatId));

  // setTimeout(() => dispatch(createMessage(botMessage, chatId)), 2000);
};
