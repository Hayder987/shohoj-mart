import { format, formatDistanceToNow } from "date-fns";
import useAllOrder from "../../../hooks/useAllOrder";
import { TbListDetails } from "react-icons/tb";
import usePrivateServer from "../../../hooks/usePrivateServer";
import toast from "react-hot-toast";
import LoaderSipnner from "../../common/LoaderSipnner";
import useSingleOrder from "../../../hooks/useSingleOrder";
import { useState } from "react";


const OrderHistory = () => {
  const { allOrder, allOrderLoading, refetch } = useAllOrder();
  const privateServer = usePrivateServer();
  const [productId, setProductId] = useState('')

  const {singleOrder} = useSingleOrder(productId)
  

  const changeStatus = async (value, id) => {
    try {
      await privateServer.patch(`/updateOrder/${id}`, { status: value });
      refetch();
      toast.success("Update Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  console.log(singleOrder)

  return (
    <div className="py-6 px-4">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-blue-100">
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th className="">Status</th>
              <th className="">Action</th>
            </tr>
          </thead>
          {allOrderLoading ? (
            <LoaderSipnner />
          ) : (
            <tbody>
              {/* row 1 */}
              {allOrder?.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{item?.name}</td>
                  <td>{item?.userEmail}</td>
                  <td>{format(new Date(item?.paymentDate), "dd MMM yyyy")}</td>
                  <td className="font-medium">
                    {formatDistanceToNow(new Date(item?.paymentDate), {
                      addSuffix: true,
                    })}
                  </td>
                  <td className="">
                    {item?.status === "pending" && (
                      <button className="w-[120px] py-1 px-4 font-medium bg-yellow-500 text-white rounded-full">
                        {item?.status}
                      </button>
                    )}
                    {item?.status === "cancel" && (
                      <button className="w-[120px] py-1 px-4 font-medium bg-red-600 text-white rounded-full">
                        {item?.status}
                      </button>
                    )}
                    {item?.status === "complete" && (
                      <button className="w-[120px] py-1 px-4 font-medium bg-green-600 text-white rounded-full">
                        {item?.status}
                      </button>
                    )}
                  </td>
                  <td className="flex justify-center items-center gap-6">
                    <button
                    onClick={() => {
                      setProductId(item?._id)
                      document.getElementById("my_modal_5").showModal()
                    }}
                     className="text-2xl text-blue-700 cursor-pointer">
                      <TbListDetails />
                    </button>
                    <select
                      onChange={(e) => changeStatus(e.target.value, item?._id)}
                      className="select select-primary"
                    >
                      <option value={"pending"}>Pending</option>
                      <option value={"complete"}>Approve</option>
                      <option value={"cancel"}>Cancel</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {/* modal */} 
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
         <div className="">
          <p className="text-center font-medium text-xl py-3">Ordered Item</p>
           {/* product */}
           <div className="flex flex-wrap gap-6">
            {singleOrder?.items?.map((item, idx)=>(
              <p key={idx} className=""><span className="font-semibold text-blue-600">#{idx + 1}</span> {item} </p>
            ))}
           </div>
           <div className="divider"></div>
           <div className="">
            <p className="mb-2"><span className="font-semibold">Paid:</span> {singleOrder?.paidAmount}$</p>
            <p className="mb-2"><span className="font-semibold">TransactionId:</span> {singleOrder?.transactionId}</p>
            <p className="mb-2"><span className="font-semibold">District:</span> {singleOrder?.district}</p>
            <p className="mb-2"><span className="font-semibold">Address:</span> {singleOrder?.address}</p>
            <p className="mb-6"><span className="font-semibold">Phone:</span> {singleOrder?.phone}</p>

            
           </div>
         </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OrderHistory;
