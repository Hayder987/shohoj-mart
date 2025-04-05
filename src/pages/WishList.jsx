import { useEffect } from "react";
import useWishList from "../hooks/useWishList";
import PageMargin from "../components/common/PageMargin";
import WishCard from "../components/wishComponenets/WishCard";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { MdShoppingCartCheckout } from "react-icons/md";

const WishList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { wishData, wishLoading, wishRefetch } = useWishList();

  return (
    <div className="bg-gray-50">
      <PageMargin />
      <div className="lg:max-w-[1200px] p-4 lg:p-12 mx-auto">
        <h1 className="text-4xl mb-8 font-medium">My Wishlist</h1>
        <div className="bg-white px-4 py-3 mb-8 flex items-center justify-between">
          <button className="text-blue-800 font-semibold flex items-center gap-1 cursor-pointer">
            Add All To Cart
            <span className="text-2xl"><MdShoppingCartCheckout /></span>
          </button>
          <button className="flex font-medium items-center gap-1 cursor-pointer">
            <span className="text-2xl text-red-600">
              <RiDeleteBin2Fill />
            </span>
            Delete All
          </button>
        </div>
        {/* wish card */}
        <div className="">
          <WishCard
            wishData={wishData}
            wishLoading={wishLoading}
            wishRefetch={wishRefetch}
          />
        </div>
      </div>
    </div>
  );
};

export default WishList;
