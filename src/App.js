import { Chats } from "./Routes/chats";
import { AppBar, Container, Stack, Button } from "@mui/material";

import { Route, Switch, Link } from "react-router-dom";
import { Profile } from "./Routes/profile/components/Profile";
import { Home } from "./Routes/home";
import { WaifusList } from "./Routes/waifu";

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <AppBar color="inherit" position="static" sx={{ p: 2, mb: 1 }}>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" component={Link} to="/">
            Home
          </Button>
          <Button variant="outlined" component={Link} to="/profile">
            Profile
          </Button>
          <Button variant="outlined" component={Link} to="/waifu">
            Get pic
          </Button>
          <Button variant="outlined" component={Link} to="/chats">
            Chats
          </Button>
        </Stack>
      </AppBar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/waifu">
          <WaifusList />
        </Route>

        <Route path="/chats">
          <Chats />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route>
          <h2>Page not found!</h2>
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
