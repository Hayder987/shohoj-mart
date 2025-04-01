import React from "react";
import useProduct from "../../../hooks/useProduct";
import LoaderSipnner from "../../common/LoaderSipnner";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const AllProduct = () => {
  const { productData, isLoading, refetch } = useProduct("");
  
  if(isLoading){
    return <LoaderSipnner/>
  }

  return (
    <div className="px-2 py-6">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-100">
              <th>Sl</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Product Code</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              productData.map((item, idx)=>(
                <tr key={idx} className="bg-base-200">
                <th>{idx + 1}</th>
                <td><img src={item?.image} alt={item?.title} className="w-10 h-10 rounded-full" /></td>
                <td>{item?.title}</td>
                <td>{item?.category}</td>
                <td>{item?.price} $</td>
                <td>{item?.productCode}</td>
                <td>{item?.stock}</td>
                <td className="flex text-2xl items-center gap-4">
                 <button className="text-blue-800 cursor-pointer"><FaEdit /></button>
                 <button className="text-red-700 cursor-pointer"><RiDeleteBin2Fill /></button>
                </td>
              </tr>
              ))
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
