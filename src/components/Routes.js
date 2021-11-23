import { Chats } from "../Routes/chats";
import { AppBar, Container, Stack, Button } from "@mui/material";
import { Route, Switch, Link } from "react-router-dom";
import { Profile } from "../Routes/profile/components/Profile";
import { Home } from "../Routes/home";
import { WaifusList } from "../Routes/waifu";
import { Login } from "./Login";
import { SignUp } from "./Signup";
import { useState, useEffect } from "react";
import { PublicRoute } from "../hocs/publicRoute";
import { PrivateRoute } from "../hocs/privateRoute";
import { auth } from "../services/firebase";
import { SignOut } from "./Signout";

export const Routes = () => {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 10 }}>
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
          <Button variant="outlined" component={Link} to="/signup">
            Signup
          </Button>
          <Button variant="outlined" component={Link} to="/login">
            Login
          </Button>
          <Button variant="outlined" component={Link} to="/signout">
            SignOut
          </Button>
        </Stack>
      </AppBar>
      <Switch>
        <PublicRoute authenticated={authed} exact path="/">
          <Home />
        </PublicRoute>

        <PublicRoute authenticated={authed} path="/waifu">
          <WaifusList />
        </PublicRoute>

        <PublicRoute authenticated={authed} path="/signup">
          <SignUp />
        </PublicRoute>

        <PublicRoute authenticated={authed} path="/login">
          <Login />
        </PublicRoute>

        <PrivateRoute authenticated={authed} path="/chats">
          <Chats />
        </PrivateRoute>

        <PrivateRoute authenticated={authed} path="/profile">
          <Profile />
        </PrivateRoute>

        <PrivateRoute authenticated={authed} path="/signout">
          <SignOut />
        </PrivateRoute>

        <Route>
          <h2>Page not found!</h2>
        </Route>
      </Switch>
    </Container>
  );
};
