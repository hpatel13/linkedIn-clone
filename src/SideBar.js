import { Avatar } from "@mui/material";
import React from "react";
import "./SideBar.css";

function SideBar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./unsplash.jpg" alt=""></img>
        <Avatar className="sidebar__avatar"></Avatar>
        <h2>Harsh Patel</h2>
        <h4>harsh.patel@mylinkedin.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">2,543</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <div className="sidebar__statNumber">2,443</div>
        </div>
      </div>
      <div className="sidebar__buttom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("redux")}
        {recentItem("reactrouter")}
        {recentItem("softwareengineering")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default SideBar;
