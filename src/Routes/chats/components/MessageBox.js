import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList";
import {useEffect, useState} from 'react';
import { useParams, Redirect } from "react-router";
import { CHATS } from "../../../mocks/chats";

export const MessageBox = () => {

  const { chatId } = useParams();
    

const [messageList, setMessageList] = useState([]);

const sendMessage = (author, text) => {
  const newMessageList = [...messageList];
  const id = Date.now();
  const newMessage = {
    id,
    author,
    text,
  };
  newMessageList.push(newMessage);
  setMessageList(newMessageList);
};

const onSendMessage = (value) => {
  sendMessage("user", value);
};


useEffect(() => {
  if (messageList.length === 0) {
    return;
  }

  const lastEl = messageList[messageList.length - 1];

  if (lastEl.author === "bot") {
    return;
  }

  const timerId = setTimeout(() => {
    sendMessage("bot", "Hi!");
  }, 1500);
  return () => {
    clearTimeout(timerId);
  };
}, [messageList]);

if (!CHATS.find(({id}) => id === chatId)) {
  return <Redirect to='/chats' />
};

return (
    <>
    <MessageList messageList={messageList} />
    <MessageInput onSend={onSendMessage} />
    </>
)
}