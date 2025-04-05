import React from "react";
import Card from "./Card";
import { RiDeleteBin2Fill } from "react-icons/ri";

const CartCard = ({ cartData, cartLoading, cartRefetch }) => {
  
  return (
    <div className="">
        <div className="flex justify-between items-center px-4 py-2 mb-6 bg-white">
            <p className="">Items: {cartData?.length}</p>
            <button className="flex font-medium items-center gap-1 cursor-pointer"><span className="text-2xl text-red-600"><RiDeleteBin2Fill /></span>Delete All</button>
        </div>
      <div className="grid grid-cols-1 bg-white p-4 gap-2">
        {cartData?.map((item) => (
          <Card key={item?._id} item={item} cartRefetch={cartRefetch} />
        ))}
      </div>
    </div>
  );
};

export default CartCard;
