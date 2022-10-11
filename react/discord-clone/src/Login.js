import React from "react";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          alt=""
          src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png"
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
