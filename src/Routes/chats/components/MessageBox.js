import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import { useEffect } from "react";
import { useParams, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getChatMessagesById } from "../../../store/messages/selectors";
import { hasChatById } from "../../../store/chats/selectors";
import { createMessage } from "../../../store/messages/actions";

export const MessageBox = () => {
  const profileName = useSelector((state) => state.profile.name);
  const { chatId } = useParams();
  const dispatch = useDispatch();
  const messageList = useSelector(getChatMessagesById(chatId));
  const hasChat = useSelector(hasChatById(chatId));

  const sendMessage = (author, text) => {
    const newMessage = {
      author,
      text,
    };
    dispatch(createMessage(newMessage, chatId));
  };

  const onSendMessage = (value) => {
    sendMessage(profileName, value);
  };

  useEffect(() => {
    if (!messageList || messageList.length === 0) {
      return;
    }

    const lastEl = messageList[messageList.length - 1];

    if (lastEl.author === "bot") {
      return;
    }

    const timerId = setTimeout(() => {
      sendMessage("bot", "Hello, human!");
    }, 1500);
    return () => {
      clearTimeout(timerId);
    };
  }, [messageList]);

  if (!hasChat) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <MessageList messageList={messageList} />
      <MessageInput onSend={onSendMessage} />
    </>
  );
};
