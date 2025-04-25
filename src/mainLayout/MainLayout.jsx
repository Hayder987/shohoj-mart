import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import aiImage from "../assets/images/chat-2.jpg";
import { useState } from "react";
import { IoIosChatboxes } from "react-icons/io";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith("/dashboard");
  const [elisha, setElisha] = useState(false);

  return (
    <div>
      {!isDashboard && <NavBar />}
      <div className="min-h-[calc(100vh-60px)] relative lg:min-h-[calc(100vh-140px)]">
        <Outlet />
        <div className="fixed flex flex-col gap-4 z-20 bottom-16 md:bottom-24 right-6 lg:right-14">
          <Link to={"/deepseek"}>
            <div className="relative">
              <div
                onMouseOver={() => setElisha(true)}
                onMouseLeave={() => setElisha(false)}
                className={`${
                  pathname === "/deepseek" ||
                  pathname === "/chat" ||
                  pathname === "/help"
                    ? "hidden"
                    : "flex justify-center items-center"
                } w-12 h-12 rounded-full border-2 border-blue-700 `}
              >
                <img src={aiImage} alt="" className=" rounded-full" />
                <div
                  className={`${
                    elisha
                      ? "flex fixed bottom-[120px] duration-300 bg-blue-700 text-white py-1 px-4 rounded-lg"
                      : "hidden"
                  }`}
                >
                  <p className="text-md">Ai HDR</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/chat"}>
            <div className="">
              <div
                className={`${
                  pathname === "/deepseek" ||
                  pathname === "/chat" ||
                  pathname === "/help"
                    ? "hidden"
                    : "flex justify-center items-center"
                } w-12 h-12 rounded-full border-2 bg-blue-700 border-blue-700 `}
              >
                <p className="text-4xl text-white">
                  <IoIosChatboxes />
                </p>
                <div
                  className={
                    "flex fixed bottom-[60px] duration-300   py-1 px-4 rounded-lg"
                  }
                ></div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default MainLayout;
