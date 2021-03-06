import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="headerOptions">
      {Icon && <Icon className="headerOption__icon"></Icon>}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
