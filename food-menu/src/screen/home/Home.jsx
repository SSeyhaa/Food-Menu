import BannerCarousel from "../../components/BannerCarousel";
import ItemCard from "../../components/ItemCard";
import MenuCard from "../../components/MenuCard";
import SearchBar from "../../components/SearchBar";
import ViewAll from "../../components/ViewAll.jsx";

const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <SearchBar />
      <div className="container-app">
        {/*------------------------------------*/}
        <ViewAll text={"Food Category"} />
        <div className="flex flex-wrap justify-between gap-y-3">
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
        {/*------------------------------------*/}

        {/*------------------------------------*/}
        <ViewAll text={"Most Popular"} />
      

        <div className="flex flex-wrap justify-center gap-x-14">
          <ItemCard
            itemId="buger01"
            imgSrc={
              "https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            }
            name={"aa"}
            ratings={4}
            price={"10"}
          />

          <ItemCard
            itemId="buger01"
            imgSrc={
              "https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            }
            name={"aa"}
            ratings={4}
            price={"10"}
          />

          <ItemCard
            itemId="buger01"
            imgSrc={
              "https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            }
            name={"aa"}
            ratings={4}
            price={"10"}
          />

          <ItemCard
            itemId="buger01"
            imgSrc={
              "https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            }
            name={"aa"}
            ratings={4}
            price={"10"}
          />

          <ItemCard
            itemId="buger01"
            imgSrc={
              "https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            }
            name={"aa"}
            ratings={4}
            price={"10"}
          />
          <ItemCard
            itemId="buger01"
            imgSrc={
              "https://png.pngtree.com/png-clipart/20230414/original/pngtree-isolated-burger-on-transparent-background-png-image_9055072.png"
            }
            name={"aa"}
            ratings={4}
            price={"10"}
          />
        </div>
      </div>
      {/*------------------------------------*/}
    </div>
  );
};
export default Home;
