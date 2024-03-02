import { Carousel } from "flowbite-react";

export default function BannerCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl=" " rightControl=" " pauseOnHover>
        <img
          src="https://i.ytimg.com/vi/LyvM9bXe8zI/maxresdefault.jpg"
          alt="..."
        />
        <img
          src="https://img.freepik.com/free-psd/delicious-burger-food-menu-facebook-cover-template_106176-744.jpg"
          alt="..."
        />
        <img
          src="https://as2.ftcdn.net/v2/jpg/04/87/18/99/1000_F_487189984_gMi84oHVh08azpPw7FpA5nFS7puxlgoj.jpg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
