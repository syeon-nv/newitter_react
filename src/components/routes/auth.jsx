import { authService } from "fbase";
import { useState } from "react";
import PropTypes from "prop-types";
// prettier-ignore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Auth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        // prettier-ignore
        data = await createUserWithEmailAndPassword(authService,email,password);
      } else {
        // prettier-ignore
        data = await signInWithEmailAndPassword(authService,email,password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }

    if (newAccount) setNewAccount(true);
    setNewAccount(false);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Enter The Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter The Passwords"
          required
          value={password}
          onChange={onChange}
        />
        <input
          onClick={onSubmit}
          type="submit"
          value={newAccount ? "Create Account" : "Log In"}
        />
        <p> {error}</p>
      </form>
      <div>
        <button>Continue With Google</button>
        <button>Continue With Github</button>
      </div>
    </>
  );
};

Auth.propTypes = {};

export default Auth;
