import "./App.css";
import { Route } from "react-router-dom";
import Home from "./screen/home/Home";
import Menu from "./screen/menu/Menu";
import Cart from "./screen/cart/Cart";
import Favorite from "./screen/favorite/Favorite";
import History from "./screen/history/History";
import Profile from "./screen/profile/Profile";

import MenuNavigation from "./components/MenuNavigation";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <MenuNavigation />
    </div>
  );
}

export default App;
