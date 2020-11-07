import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, playlist }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon"></Icon>}
      {/* if we have an icon, render it in h4, otherwise render it in a paragraph title */}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
