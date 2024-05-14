import React from "react";
import { staticData } from "../data/staticsidemenu";

const SideStaticBar = () => {
  return (
    <div className="static-menu">
      {staticData.map((item) => (
        <div key={item.id} className="item">
            <img src={item.image} alt="menu-icon" />
            <p>{item.name}</p>
          </div>
      ))}
    </div>
  );
};

export default SideStaticBar;
