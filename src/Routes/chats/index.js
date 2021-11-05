import { MessageBox } from "./components/MessageBox";
import { ChatList } from "./components/ChatList";
import Grid from "@mui/material/Grid";
import { Switch, Route } from "react-router-dom";
import { CHATS } from "../../mocks/chats";

export const Chats = () => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <ChatList list={CHATS} />
      </Grid>
      <Grid item xs={9}>
        <Switch>
          <Route component={MessageBox} path="/chats/:chatId" />
        </Switch>
      </Grid>
    </Grid>
  );
};
