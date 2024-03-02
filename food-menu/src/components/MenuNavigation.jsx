import { useEffect } from "react";
import MenuContainer from "./MenuContainer";
import {
    Favorite,
    HomeRounded,
    Restaurant,
    ShoppingCart,
    History,
    AccountCircle
  } from "@mui/icons-material";
const MenuNavigation = () => {

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  return (
    <div>
      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'/'} icon = {<HomeRounded />}  isHome/>
          <MenuContainer link = {'/menu'} icon = {<Restaurant />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'/favorite'} icon = {<Favorite />} />
          <MenuContainer link = {'/cart'} icon = {<ShoppingCart />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'/history'} icon = {<History />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'/profile'} icon = {<AccountCircle />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default MenuNavigation;