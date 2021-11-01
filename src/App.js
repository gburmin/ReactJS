import { useState, useEffect } from "react";
import { MessageInput } from "./components/MessageInput";
import { MessageList } from "./components/MessageList";
import { Container } from "@mui/material";
import { ChatList } from "./components/ChatList";
import Grid from "@mui/material/Grid";

const App = () => {
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
  return (
    <Container maxWidth="sm" sx={{mt:10}}>
      <Grid container>
        <Grid item xs={3}>
          <ChatList />
        </Grid>

        <Grid item xs={9}>
          <MessageList messageList={messageList} />
          <MessageInput onSend={onSendMessage} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
