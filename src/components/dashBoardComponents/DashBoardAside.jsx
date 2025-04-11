import { AiOutlineProduct } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { RiApps2AddLine } from "react-icons/ri";
import { Link } from "react-router";

const DashBoardAside = () => {
  return (
    <div>
      <Link to={"/"}>
        <h1 className="text-2xl font-bold">
          <span className="italic">shohoj</span>
          <span className="text-yellow-400">Mart+</span>
        </h1>
      </Link>
      <div className="border-b mt-4 mb-6 border-gray-300"></div>
      {/* nav-menu */}
      <div className="">
        {/* admin menu */}
        <div className="">
          <Link to={"add-product"}>
            <button className="flex hover:underline font-medium hover:text-yellow-300 cursor-pointer items-center gap-2">
              <span className="text-xl"><RiApps2AddLine /></span>
              Add Product
            </button>
          </Link>
          <Link to={"all-product"}>
            <button className="flex mt-4 hover:underline font-medium hover:text-yellow-300 cursor-pointer items-center gap-2">
              <span className="text-xl"><AiOutlineProduct /></span>
              All Product
            </button>
          </Link>
          <Link to={"all-user"}>
            <button className="flex mt-4 hover:underline font-medium hover:text-yellow-300 cursor-pointer items-center gap-2">
              <span className="text-xl"><FaUserGroup /></span>
              All User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashBoardAside;
