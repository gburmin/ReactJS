import { nanoid } from "nanoid";

export const compareById = (targetId) => (item) => item.id === targetId;

export const createMessage = (author, text) => ({
  author,
  text,
  id: nanoid(),
});

export const createChat = (name) => ({
  name,
  id: nanoid(),
});
