import "./App.css";
import { useState, useEffect, useStateValue } from "react";
import Carousel from "./components/HomeCarousel";
import LiveSearch from "./components/LiveSearch";
import FoodCard from "./components/FoodCard";
import MenuCategory from "./components/MenuCategory";
import SimpleBottomNavigation from "./components/BottomMenu";
import ItemCard from "./components/ItemCard";
import MenuContainer from "./components/MenuContainer";
import {
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import MenuCard from "./components/MenuCard";
import ViewAll from "./components/ViewAll.jsx";

const profiles = [
  { id: "1", name: "Allie Grater" },
  { id: "2", name: "Aida Bugg" },
  { id: "3", name: "Gabrielle" },
  { id: "4", name: "Grace" },
  { id: "5", name: "Hannah" },
  { id: "6", name: "Heather" },
  { id: "7", name: "John Doe" },
  { id: "8", name: "Anne Teak" },
  { id: "9", name: "Audie Yose" },
  { id: "10", name: "Addie Minstra" },
  { id: "11", name: "Anne Ortha" },
];

function App() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);

  const [results, setResults] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleChange = (e) => {
    const { target } = e;
    if (!target.value.trim()) return setResults([]);

    const filteredValue = profiles.filter((profile) =>
      profile.name.toLowerCase().startsWith(target.value.toLowerCase())
    );
    setResults(filteredValue);
  };

  return (
    <div className="">
      <Carousel />
      <LiveSearch
        results={results}
        value={selectedProfile?.name}
        renderItem={(item) => <p>{item.name}</p>}
        onChange={handleChange}
        onSelect={(item) => setSelectedProfile(item)}
      />
        <div className="flex items-center justify-between px-3 py-6">
            <h1 className="font-bold text-lg">Food Category</h1>
            <ViewAll/>
        </div>
      <div className="flex flex-wrap justify-center gap-x-7 gap-4">
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
        <MenuCard
          imgSrc={
            "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
          }
          name={"Burger"}
          isActive={true}
        />
      </div>
      <h1 className="mt-5">Popular</h1>

      <div className="flex flex-wrap justify-center gap-x-10">
      <ItemCard
        itemId="buger01"
        imgSrc={
          "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
        }
        name={"aa"}
        ratings={4}
        price={"10"}
      />

      <ItemCard
        itemId="buger01"
        imgSrc={
          "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
        }
        name={"aa"}
        ratings={4}
        price={"10"}
      />

      <ItemCard
        itemId="buger01"
        imgSrc={
          "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
        }
        name={"aa"}
        ratings={4}
        price={"10"}
      />

      <ItemCard
        itemId="buger01"
        imgSrc={
          "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
        }
        name={"aa"}
        ratings={4}
        price={"10"}
      />

      <ItemCard
        itemId="buger01"
        imgSrc={
          "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
        }
        name={"aa"}
        ratings={4}
        price={"10"}
      />
            <ItemCard
        itemId="buger01"
        imgSrc={
          "https://w7.pngwing.com/pngs/739/553/png-transparent-hamburger-veggie-burger-chicken-sandwich-fast-food-hamburger-burger-burger-sandwich-food-recipe-cheeseburger.png"
        }
        name={"aa"}
        ratings={4}
        price={"10"}
      />
      </div>

      <div className="leftMenu">
        <ul id="menu">
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<HomeRounded />}  isHome/>
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Favorite />} />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<SummarizeRounded />}  />
          {/* prettier-ignore */}
          <MenuContainer link = {'#'} icon = {<Settings />}  />
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;
