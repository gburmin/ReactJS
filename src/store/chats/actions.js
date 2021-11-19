export const ADD_CHAT = "ADD_CHAT";
export const SET_CHATS = "SET_CHAT";
export const REMOVE_CHAT = "REMOVE_CHAT";

export const addChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});
export const setChats = (chats) => ({
  type: SET_CHATS,
  payload: chats,
});

export const removeChat = (chatId) => ({
  type: REMOVE_CHAT,
  payload: chatId,
});
