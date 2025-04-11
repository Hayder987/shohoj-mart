import { useEffect } from "react";
import { Link, Outlet } from "react-router";
import DashBoardAside from "../components/dashBoardComponents/DashBoardAside";
import { FaBars } from "react-icons/fa";

const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex relative">
      <div className="py-2 flex justify-between px-4 fixed z-10 top-0 left-0 bg-blue-100 lg:hidden w-full">
        <button
         
         className="text-2xl cursor-pointer"><FaBars /></button>
       <Link to='/'>
       <h1 className="text-xl font-bold">
          <span className="italic">shohoj</span>
          <span className="text-yellow-400">Mart+</span>
        </h1>
       </Link>
      </div>
      {/* aside */}
      <div className="lg:w-2/12 p-6 hidden lg:flex lg:flex-col bg-blue-800 text-white min-h-[100vh]">
        <DashBoardAside/>
      </div>
      {/* page-content */}
      <div className="w-full lg:w-10/12 bg-gray-100 px-3 py-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
