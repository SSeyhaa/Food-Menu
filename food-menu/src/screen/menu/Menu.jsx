import BannerCarousel from "../../components/BannerCarousel";
import ItemCard from "../../components/ItemCard";
import HorizontalScrollCard from "../../components/HorizontalScrollCard";
import MenuCardRound from "../../components/MenuCardRound";
import SearchBar from "../../components/SearchBar";
import ViewAll from "../../components/ViewAll";

const Cart = () => {
  return (
    <div>
      <BannerCarousel />
      <SearchBar />
      <div className="container-app">
        <ViewAll text={"Menu"} />
        {/* <MenuCardRound /> */}
        <HorizontalScrollCard>
        <MenuCardRound />
        <MenuCardRound />
        <MenuCardRound />
        <MenuCardRound />
        <MenuCardRound />
        <MenuCardRound />
        <MenuCardRound />
        <MenuCardRound />
        </HorizontalScrollCard>

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
    </div>
  );
};
export default Cart;
