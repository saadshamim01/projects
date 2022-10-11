import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SidebarChannel from "./SidebarChannel";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { selectUser } from "./features/userSlice";
import { auth } from "firebase";

function Sidebar() {
  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channel</h4>
            <AddIcon className="sidebar__addChannel" />
          </div>
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.display}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>

        <div className="sidebar__profileIcons">
          <SettingsIcon />
          <MicIcon />
          <HeadphonesIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
