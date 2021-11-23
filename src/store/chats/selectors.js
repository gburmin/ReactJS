export const getChatsReducer = (state) => state.chats;
export const getChats = (state) => getChatsReducer(state)?.chats || {};
export const getChatList = (state) => Object.values(getChats(state));
export const getChatById = (chatId) => (state) => getChats(state)[chatId];
export const hasChatById = (chatId) => (state) => chatId in getChats(state);
