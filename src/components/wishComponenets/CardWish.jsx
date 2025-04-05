import React from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useNavigate } from "react-router";

const CardWish = ({ item, wishRefetch }) => {
    const navigate = useNavigate();
  return (
    <div>
      <div className="p-4 border flex items-center border-gray-300">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* image and content */}
          <div
           onClick={()=>navigate(`/details/${item?.porductId}`)}
           className="lg:w-7/12 w-full flex items-center gap-4">
            <div className="w-4/12">
              <img src={item?.image} alt="" className=" object-cover" />
            </div>
            {/* content */}
            <div className="w-7/12">
              <p className="font-semibold mb-1">{item?.title}</p>
              <p className="text-sm">{item?.description.slice(0, 50)} ...</p>
              <p className="">
                <span className="font-semibold">Brand:</span> {item?.brand}
              </p>
            </div>
          </div>
          {/* price and action */}
          <div className="lg:w-5/12 px-6 w-full flex items-center justify-center gap-4">
            {/* price */}
            <div className="w-8/12 flex flex-col justify-center ">
              <p className="text-xl text-yellow-600 font-semibold mb-1">
                {item?.netPrice}$
              </p>
              <p className="line-through font-medium mb-2">{item?.price}$</p>
              <button
                className="text-2xl text-red-600 cursor-pointer"
              >
                <RiDeleteBin2Fill />
              </button>
            </div>
            {/* action */}
            <div className="w-4/12">
              <button className="bg-blue-700 cursor-pointer text-white flex items-center gap-1 py-3 rounded-sm px-6">
                <span className="text-xl"><FaPlus /></span>
                <span className="text-2xl"><FaShoppingCart /></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWish;
