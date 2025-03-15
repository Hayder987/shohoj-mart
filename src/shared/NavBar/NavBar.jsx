import { BsGift } from "react-icons/bs";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="py-3 bg-blue-800">
      <nav className="max-w-[1300px] px-4 mx-auto">
        {/* nav-1 */}
        <div className="text-white flex justify-between items-center">
          <Link to={"/"}>
            <h1 className="text-4xl font-bold">
              <span className="italic">shohoj</span>
              <span className="text-yellow-400">Mart+</span>
            </h1>
          </Link>
          {/* serch */}
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              placeholder="search store"
              className="px-4 py-2 min-w-[420px] rounded-full outline-0 bg-white text-black"
            />
            <p className="absolute top-2 cursor-pointer text-2xl text-black right-3">
              <IoSearchOutline />
            </p>
          </div>
          {/* icon */}
          <div className="flex justify-between items-center gap-6">
            <div className="text-sm">
              <p className="">Available 24/7 at</p>
              <p className="">+8801771814597</p>
            </div>
            <Link to={'/wishlist'}>
              <button className="flex text-yellow-400 flex-col cursor-pointer justify-center items-center">
                <span className="text-3xl ">
                  <FaRegHeart />
                </span>
                <span className="text-sm font-light">Wish Lists</span>
              </button>
            </Link>
            <button className="flex text-yellow-400 flex-col cursor-pointer justify-center items-center">
              <span className="text-3xl">
                <FaRegUser />
              </span>
              <span className="text-sm font-light">Sign In</span>
            </button>
            <Link to={"/cart"}>
              <button className="flex relative text-yellow-400 flex-col cursor-pointer justify-center items-center">
                <span className="text-3xl">
                  <IoCartOutline />
                </span>
                <span className="text-sm font-light">Cart</span>
                <span className="bg-blue-800 rounded-full text-xl text-white absolute -top-2 right-0">
                  0
                </span>
              </button>
            </Link>
          </div>
        </div>
        {/* nav-2 */}
        <div className="mt-8 flex justify-between">
          <ul className="flex gap-6 items-center text-white">
            <NavLink to={"/"}>
              <li className="">Home</li>
            </NavLink>
            <NavLink to={"/collection"}>
              <li className="">Collection</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="">Contact</li>
            </NavLink>
          </ul>
          {/* offer */}
          <div className="flex gap-6 cursor-pointer items-center">
            <Link to={"/help"}>
              <div className="flex items-center gap-2 border-gray-100 border-r-2 px-5">
                <p className="text-blue-400 text-xl">
                  <MdHelp />
                </p>
                <p className="text-gray-100">Help</p>
              </div>
            </Link>
            <Link to={"/offers"}>
              <div className="flex items-center gap-2">
                <p className="text-orange-300">
                  <BsGift />
                </p>
                <p className="text-gray-100">Offers</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
