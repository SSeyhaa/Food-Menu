import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

function MenuCard({ imgSrc, name, isActive }) {
  return (
    <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
        <img src={imgSrc} alt="" />
      <h3>{name}</h3>
    </div>
  );
}

export default MenuCard;
