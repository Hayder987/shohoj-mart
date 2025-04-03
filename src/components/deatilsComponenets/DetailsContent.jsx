import { FaRegHeart } from "react-icons/fa";
import LoaderSipnner from "../common/LoaderSipnner";
import { BsCartPlus } from "react-icons/bs";

const DetailsContent = ({ product, discount, productLoading }) => {
  return (
    <div>
      {productLoading ? (
        <LoaderSipnner />
      ) : (
        <div className="flex flex-col gap-10 lg:flex-row  lg:max-w-[1200px] mx-auto">
          {/* image */}
          <div className="w-full lg:w-1/2 py-6">
            <img src={product?.image} alt="" className="" />
          </div>
          {/* content */}
          <div className="w-full lg:w-1/2 py-6">
            <h1 className="text-3xl font-semibold mb-4">{product?.title}</h1>
            <div className="flex items-center flex-wrap gap-3 mb-6">
              <button className=" px-6 text-yellow-600 py-2 font-semibold bg-gray-200 rounded-full">
                Offer Price:{" "}
                <span className="">{product?.price - discount}</span>$
              </button>
              <button className=" px-6 py-2 font-semibold bg-gray-200 rounded-full">
                Save: <span className="text-yellow-600">{discount}$ </span>From{" "}
                {product?.discount}% OFF
              </button>
              <button className=" px-6 py-2 font-semibold bg-gray-200 rounded-full">
                Regular Price:{" "}
                <span className="line-through">{product?.price}</span>$
              </button>
            </div>
            <p className="mb-3">{product?.description}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="">
                <span className="font-semibold">Brand:</span>{" "}
                {product?.brandName}
              </p>
              <p className="">
                <span className="font-semibold">Model:</span>{" "}
                {product?.modelName}
              </p>
            </div>
            <p className="mb-4">
              <span className="font-semibold">Product Code:</span>{" "}
              {product?.productCode}
            </p>
            <p className="">
              <span className="font-semibold">Feature:</span> {product?.feature}
            </p>
            <button className="mt-8">
              {parseInt(product?.stock) > 0 ? (
                <span className="bg-green-600 rounded-full text-white px-8 py-1 text-xl font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="bg-orange-600 rounded-full text-white px-8 py-1 text-xl font-semibold">
                  Out Of Stock
                </span>
              )}
            </button>
            <div className="divider"></div>
            {/* cart */}
            <div className="mt-6 flex gap-4 items-center">
              {parseInt(product?.stock) ? (
                <button className="py-2 px-10 flex items-center gap-2 cursor-pointer bg-blue-800 text-white font-medium rounded-full">
                  Add To Cart{" "}
                  <span className="text-xl">
                    <BsCartPlus />
                  </span>
                </button>
              ) : (
                ""
              )}
              <button className="text-3xl hover:text-yellow-600 cursor-pointer"><FaRegHeart /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsContent;
