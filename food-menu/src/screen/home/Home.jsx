import BannerCarousel from "../../components/BannerCarousel";
import ItemCard from "../../components/ItemCard";
import MenuCard from "../../components/MenuCard";
import SearchBar from "../../components/SearchBar";
import ViewAll from "../../components/ViewAll.jsx";
import foodCategories from "../../assets/mock data/foodCategories.json";
const Home = () => {
  return (
    <div>
      <BannerCarousel />
      <SearchBar />
      <div className="container-app">
        {/*------------------------------------*/}
        <ViewAll text={"Food Category"} />
        <div className="flex flex-wrap justify-between gap-y-3">
          {foodCategories.foodCategories.map((category) => (
            <MenuCard
              key={category.id}
              imgSrc={category.imagePath}
              name={category.name}
              isActive={true}
            />
          ))}
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
