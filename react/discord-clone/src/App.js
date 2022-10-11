import React, { useEffect } from "react";

import "./App.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is: ", authUser);
      if (authUser) {
        // Then user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            display: authUser.displayName,
          })
        );
      } else {
        // User is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <div>
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
