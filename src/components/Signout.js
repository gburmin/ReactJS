import { auth } from "../services/firebase";

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};
