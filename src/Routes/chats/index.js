import { ChatList } from "../../components/ChatList";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Switch, Route } from "react-router-dom";
import { Messages } from "../messages";
import { withChats } from "../../hocs/withChats";

export const ChatsRender = ({ chats, onCreate, onDelete }) => {
  return (
    <Grid container>
      <Grid item xs={3}>
        <ChatList onDelete={onDelete} list={chats} />
        <Button onClick={onCreate}> Create chat</Button>
      </Grid>
      <Grid item xs={9}>
        <Switch>
          <Route component={Messages} path="/chats/:chatId" />
        </Switch>
      </Grid>
    </Grid>
  );
};

export const Chats = withChats(ChatsRender);
