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
      {/*------------------------------------*/}
      <ViewAll text={'Food Category'} />
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
      {/*------------------------------------*/}

      {/*------------------------------------*/}
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
      {/*------------------------------------*/}
    </div>
  );
};
export default Home;
