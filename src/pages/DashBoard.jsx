import { useEffect } from "react";
import { Outlet } from "react-router";
import DashBoardAside from "../components/dashBoardComponents/DashBoardAside";

const DashBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex">
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
