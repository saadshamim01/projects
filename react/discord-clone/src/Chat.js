import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GifIcon from "@mui/icons-material/Gif";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
      </div>
      <div className="char__input">
        <AddCircleIcon />
        <form>
          <input placeholder={`MEssage # TESTCHANNEL`} />
          <button className="chat_inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
