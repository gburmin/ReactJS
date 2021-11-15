import { MessageBox } from "./components/MessageBox";
import { ChatList } from "./components/ChatList";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Switch, Route } from "react-router-dom";
import { CHATS } from "../../mocks/chats";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { nanoid } from "nanoid";
import { getChatList } from "../../store/chats/selectors";
import { createChat, removeChat, setChats } from "../../store/chats/actions";
import { removeMessagesByChatId } from "../../store/messages/actions";

export const Chats = () => {
  const chats = useSelector(getChatList);
  const dispatch = useDispatch();

  const onCreate = useCallback(() => {
    dispatch(
      createChat({
        id: nanoid(),
        name: `name ${chats.length}`,
      })
    );
  }, []);

  const onDelete = (chatId) => {
    dispatch(removeChat(chatId));
    dispatch(removeMessagesByChatId(chatId));
  };

  useEffect(() => {
    dispatch(setChats(CHATS));
  }, []);

  return (
    <Grid container>
      <Grid item xs={3}>
        <ChatList onDelete={onDelete} list={chats} />
        <Button onClick={onCreate}> Create chat</Button>
      </Grid>
      <Grid item xs={9}>
        <Switch>
          <Route component={MessageBox} path="/chats/:chatId" />
        </Switch>
      </Grid>
    </Grid>
  );
};
