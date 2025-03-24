import Mobile from "../../assets/categoryImg/mobile-phones.jpg";
import Laptops from "../../assets/categoryImg//laptops-tablets.jpg";
import Televisions from "../../assets/categoryImg/televisions.jpg";
import PcsAccessories from "../../assets/categoryImg/pcs-accessories.jpg";
import AudioVideo from "../../assets/categoryImg/audio-video.jpg";
import Gaming from "../../assets/categoryImg/gaming-accessories.jpg";
import HomeApplience from "../../assets/categoryImg/home-appliances.jpg";
import KitchenApplience from "../../assets/categoryImg/kitchen-appliances.jpg";
import Cameras from "../../assets/categoryImg/cameras.jpg";
import Consumables from "../../assets/categoryImg/consumables.jpg";
import SmartHomes from "../../assets/categoryImg/smart-homes.jpg";
import Accessories from "../../assets/categoryImg/accessories.jpg";
import { Link } from "react-router";
import CategoryCard from "../common/CategoryCard";

const TopCategory = () => {
  return (
    <div className="container mx-auto">
      <div className="flex mb-6 justify-between">
        <p className=""></p>
        <h1 className="text-xl font-bold">Top Categories</h1>
        <Link to="/collection">
          <p className="underline hover:text-blue-700 cursor-pointer">
            Shop All
          </p>
        </Link>
      </div>
      {/* category Card */}
      <div className="grid px-4 justify-items-center gap-6 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <CategoryCard logo={Mobile} name="Mobile Phones" />
        <CategoryCard logo={Laptops} name="Laptops & Tablets" />
        <CategoryCard logo={Televisions} name="Televisions" />
        <CategoryCard logo={PcsAccessories} name="PCs & Accessories" />
        <CategoryCard logo={AudioVideo} name="Audio & Video" />
        <CategoryCard logo={Gaming} name="Gaming & Accessories" />
        <CategoryCard logo={HomeApplience} name="Home Appliances" />
        <CategoryCard logo={KitchenApplience} name="Kitchen Appliances" />
        <CategoryCard logo={Cameras} name="Cameras" />
        <CategoryCard logo={Consumables} name="Consumables" />
        <CategoryCard logo={SmartHomes} name="Smart Homes" />
        <CategoryCard logo={Accessories} name="Accessories" />
      </div>
    </div>
  );
};

export default TopCategory;
