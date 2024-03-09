import BannerCarousel from "../../components/BannerCarousel";
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
      </div>
    </div>
  );
};
export default Cart;
