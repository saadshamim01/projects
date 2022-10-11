import { Avatar } from "@mui/material";
import React from "react";
import "./Message.css";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message__info">
        <h4>
          saadshamim
          <span className="message__timestamp">This is a timestamp</span>
        </h4>
        <p>This is a message.</p>
      </div>
    </div>
  );
}

export default Message;
