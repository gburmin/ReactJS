import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../services/firebase";

export const LoginFormTestIds = {
  submit: "LoginForm-submit",
  loginField: "LoginForm-loginField",
  passwordField: "LoginForm-passwordField",
};

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      // setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Fill in the form below to login to your account.</p>
        <div>
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
            data-testid={LoginFormTestIds.loginField}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
            data-testid={LoginFormTestIds.passwordField}
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <button data-testid={LoginFormTestIds.submit} type="submit">
            Login
          </button>
        </div>
        <hr />
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};
