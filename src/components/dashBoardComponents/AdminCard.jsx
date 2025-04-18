import dollar from "../../assets/icons/dollar.png";
import user from "../../assets/icons/user.png";
import order from "../../assets/icons/order.png";
import product from "../../assets/icons/product.png";
import review from "../../assets/icons/review.png";
import CountUp from "react-countup";

const AdminCard = ({ allInfo }) => {
  return (
    <div className="grid gap-8 grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-4">
      {/* 1 */}
      <div className="flex items-center gap-4 w-full py-8 px-5 rounded-md bg-green-200">
        <div className="w-5/12">
          <img src={dollar} alt="" className="w-20 h-20" />
        </div>
        <div className="w-7/12">
          <span className="text-2xl md:text-3xl mb-3 lg:text-5xl text-blue-800 font-bold">
            <CountUp
              start={1}
              end={Math.floor(allInfo?.TotalIncome)}
              duration={2.1}
            />
          </span>
          <p className="text-xl font-semibold ">Revenue</p>
        </div>
      </div>

      {/* 2 */}
      <div className="flex items-center w-full gap-4 py-8 px-5 rounded-md bg-purple-200">
        <div className="w-5/12">
          <img src={user} alt="" className="w-20 h-20" />
        </div>
        <div className="w-7/12">
          <span className="text-2xl md:text-3xl mb-3 lg:text-5xl text-blue-800 font-bold">
            <CountUp start={1} end={allInfo?.allUser} duration={2.2} />
          </span>
          <p className="text-xl font-semibold  ">All User</p>
        </div>
      </div>

      {/* 3 */}
      <div className="flex items-center w-full gap-4 py-8 px-5 rounded-md bg-red-200">
        <div className="w-5/12">
          <img src={product} alt="" className="w-20 h-20" />
        </div>
        <div className="w-7/12">
          <span className="text-2xl md:text-3xl mb-3 lg:text-5xl text-blue-800 font-bold">
            <CountUp start={1} end={allInfo?.allProduct} duration={2.1} />
          </span>
          <p className="text-xl font-semibold ">All Products</p>
        </div>
      </div>

      {/* 4 */}
      <div className="flex items-center w-full gap-4 py-8 px-5 rounded-md bg-yellow-200">
        <div className="w-5/12">
          <img src={order} alt="" className="w-20 h-20" />
        </div>
        <div className="w-7/12">
          <span className="text-2xl md:text-3xl mb-3 lg:text-5xl text-blue-800 font-bold">
            <CountUp start={1} end={allInfo?.allOrder} duration={2.1} />
          </span>
          <p className="text-xl font-semibold ">Total Order</p>
        </div>
      </div>

       {/* 5 */}
       <div className="flex items-center w-full gap-4 py-8 px-5 rounded-md bg-fuchsia-200">
        <div className="w-5/12">
          <img src={review} alt="" className="w-20 h-20" />
        </div>
        <div className="w-7/12">
          <span className="text-2xl md:text-3xl mb-3 lg:text-5xl text-blue-800 font-bold">
            <CountUp start={1} end={allInfo?.allReviewCollection} duration={2.1} />
          </span>
          <p className="text-xl font-semibold ">All Review</p>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
