import { auth } from "../services/firebase";

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  const handleCurrentUser = () => {
    console.log(auth.getCurrentUser());
  };

  return (
    <>
      <button onClick={handleCurrentUser}>Show current user</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};
