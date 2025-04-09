import React, { useEffect, useState } from "react";
import PageMargin from "../components/common/PageMargin";
import usePublicServer from "../hooks/usePublicServer";
import { useQuery } from "@tanstack/react-query";
import SliderCard from "../components/slider/SliderCard";
import LoaderSipnner from "../components/common/LoaderSipnner";

const Collection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categoryArr = [
    "Mobile Phones",
    "Laptops Tablets",
    "Televisions",
    "PCs Accessories",
    "Audio Video",
    "Gaming Accessories",
    "Home Appliances",
    "Kitchen Appliances",
    "Cameras",
    "Consumables",
    "Smart Homes",
    "Accessories",
  ];
  const publicServer = usePublicServer();
  const [category, setCategory] = useState('');
  console.log(category)

  const {
    data: allCollection,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllProduct", category],
    queryFn: async () => {
      const { data } = await publicServer.get(`/allCollection?category=${category}`);
      return data;
    },
  });

  const product = allCollection?.items;

  return (
    <div className="mb-14">
      <PageMargin />
      <div className="flex gap-6 ">
        {/* aside */}
        <div className="w-2/12 px-4 py-8 bg-blue-100 min-h-[100vh]">
          <input
            type="text"
            name=""
            placeholder="Product Name"
            className="w-full mb-4 border bg-white rounded-md border-gray-300 py-2 px-3"
          />
          <ul className="bg-white rounded-md w-full flex cursor-pointer flex-col gap-2 px-2 py-4">
            <li 
            onClick={()=>setCategory('')}
            className="">All Product</li>
            {categoryArr?.map((item, idx) => (
              <li
              onClick={()=>setCategory(item)}
               key={idx} className="hover:underline hover:text-blue-800">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* content */}
        <div className="lg:w-10/12 w-full p-6">
          {isLoading ? (
            <LoaderSipnner />
          ) : (
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {product?.map((item) => (
                <SliderCard key={item?._id} product={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
