export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const REMOVE_MESSAGES_BY_CHAT_ID = "REMOVE_MESSAGES_BY_CHAT_ID";

export const createMessage = (message, chatId) => ({
  type: CREATE_MESSAGE,
  payload: {
    message,
    chatId,
  },
});

export const removeMessagesByChatId = (chatId) => ({
  type: REMOVE_MESSAGES_BY_CHAT_ID,
  payload: chatId,
});
