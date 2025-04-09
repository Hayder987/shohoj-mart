import React, { useEffect, useState } from "react";
import PageMargin from "../components/common/PageMargin";
import usePublicServer from "../hooks/usePublicServer";
import { useQuery } from "@tanstack/react-query";
import SliderCard from "../components/slider/SliderCard";
import LoaderSipnner from "../components/common/LoaderSipnner";
import NoData from "../components/common/NoData";
import { useLocation } from "react-router";

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
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryData = queryParams.get('category');
  
  const publicServer = usePublicServer();
  const [category, setCategory] = useState(categoryData || '');
  const [page, setPage] = useState(1);
  const limit = 12;
  const [search, setSearch] = useState('');
 

  const {
    data: allCollection,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllProduct", category, page, limit, search],
    queryFn: async () => {
      const { data } = await publicServer.get(
        `/allCollection?category=${category}&page=${page}&limit=${limit}&search=${search}`
      );
      return data;
    },
  });

  const product = allCollection?.items;

  return (
    <div className="mb-14">
      <PageMargin />
      <div className="flex gap-6 ">
        {/* aside */}
        <div className="w-2/12  px-4 py-8 bg-blue-100 min-h-[100vh]">
          <input
            type="text"
            name=""
            onChange={(e)=> setSearch(e.target.value)}
            placeholder="Product Name"
            className="w-full mb-4 border bg-white rounded-md border-gray-300 py-2 px-3"
          />
          <ul className="bg-white rounded-md w-full flex cursor-pointer flex-col gap-2 px-2 py-4">
            <li onClick={() => setCategory("")} className="">
              All Product
            </li>
            {categoryArr?.map((item, idx) => (
              <li
                onClick={() => setCategory(item)}
                key={idx}
                className="hover:underline hover:text-blue-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* content */}
        <div className="lg:w-10/12 w-full  py-6 px-8">
          {product?.length === 0 ? (
            <div className="min-h-[70vh]">
              <NoData/>
            </div>
          ) : (
            <div className="min-h-[70vh]">
              {isLoading ? (
                <LoaderSipnner />
              ) : (
                <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {product?.map((item) => (
                    <SliderCard key={item?._id} product={item} />
                  ))}
                </div>
              )}
            </div>
          )}
          {/* pagination  */}
          <div className="flex mt-10 justify-center space-x-4">
            <button
              onClick={() => {
                setPage((prev) => Math.max(prev - 1, 1));
                window.scrollTo(0, 0);
              }}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {page} of {allCollection?.totalPages}
            </span>
            <button
              onClick={() => {
                setPage((prev) =>
                  prev < allCollection?.totalPages ? prev + 1 : prev
                );
                window.scrollTo(0, 0);
              }}
              disabled={page === allCollection?.totalPages}
              className="px-8 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
