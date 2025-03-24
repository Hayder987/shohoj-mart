import { useState } from "react";
import { BsGift } from "react-icons/bs";
import { FaBars, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { MdHelp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router";
import LoginFrom from "../../components/NavbarComponents/LoginFrom";

const NavBar = () => {
  const [sign, setSignIn] = useState(false);
  const [menu, setMenu] = useState(false);
  
  return (
    <div className="py-3 sticky z-20 top-0 bg-blue-800">
      <nav className="max-w-[1300px] hidden lg:flex lg:flex-col  px-4 mx-auto">
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
            <Link to={"/wishlist"}>
              <button className="flex text-yellow-400 flex-col cursor-pointer justify-center items-center">
                <span className="text-3xl ">
                  <FaRegHeart />
                </span>
                <span className="text-sm font-light">Wish Lists</span>
              </button>
            </Link>
            <button
              onClick={() => setSignIn(!sign)}
              className="flex text-yellow-400 flex-col cursor-pointer justify-center items-center"
            >
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
        {/* sidebar SignIn */}
        <div
          className={`bg-white hidden lg:flex lg:flex-col duration-700 px-6 py-10 shadow-2xl ${
            sign ? "fixed right-0 top-0" : "-right-[2000px] fixed top-0"
          }   z-10 w-[300px] md:w-[350px] p-12 h-[100vh]`}
        >
          <div className="flex mb-12 items-center text-xl justify-between">
            <p className="font-semibold">Login</p>
            <p onClick={() => setSignIn(!sign)} className="cursor-pointer">
              <RxCross2 />
            </p>
          </div>
          {/* login Form */}
          <LoginFrom setSignIn={setSignIn} />
        </div>
      </nav>

      {/* small Device Nav */}
      <div className="px-4 flex lg:hidden justify-between items-center">
        <button
          onClick={() => setMenu(!menu)}
          className="text-2xl text-white cursor-pointer"
        >
          <FaBars />
        </button>
        <div className="flex items-center gap-6">
          <button
            onClick={() => setSignIn(!sign)}
            className="flex text-yellow-400 flex-col cursor-pointer justify-center items-center"
          >
            <span className="text-2xl">
              <FaRegUser />
            </span>
          </button>
          <Link to={"/cart"}>
            <button className="flex relative text-yellow-400 flex-col cursor-pointer justify-center items-center">
              <span className="text-2xl">
                <IoCartOutline />
              </span>
              <span className="bg-blue-800 rounded-full text-xl text-white absolute -top-2 right-0">
                0
              </span>
            </button>
          </Link>
        </div>
        {/* sidebar SignIn */}
        <div
          className={`bg-white lg:hidden duration-700 px-6 py-10 shadow-2xl ${
            sign ? "fixed right-0 top-0" : "-right-[2000px] fixed top-0"
          }   z-10 w-9/12 p-12 h-[100vh]`}
        >
          <div className="flex mb-12 items-center text-xl justify-between">
            <p className="font-semibold">Login</p>
            <p onClick={() => setSignIn(!sign)} className="cursor-pointer">
              <RxCross2 />
            </p>
          </div>
          {/* login Form */}
          <LoginFrom setSignIn={setSignIn} />
        </div>

        {/* sidebar MenuBar */}
        <div
          className={`bg-white lg:hidden duration-700 px-6 py-10 shadow-2xl ${
            menu ? "fixed left-0 top-0" : "-left-[1500px] fixed top-0"
          }   z-10 w-9/12 p-12 h-[100vh]`}
        >
          <div className="flex mb-12 items-center text-xl justify-between">
            <p className="font-semibold">
              <span className="italic">Shohoj</span>
              <span className="text-yellow-500">Mart+</span>
            </p>
            <p onClick={() => setMenu(!menu)} className="cursor-pointer">
              <RxCross2 />
            </p>
          </div>
          {/* Menu*/}
          <div className="">
            <ul className="flex flex-col gap-6 ">
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
