import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";
import aiImage from "../assets/images/chat-2.jpg";
import { useState } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();
  const isDashboard = pathname.startsWith("/dashboard");
  const [elisha, setElisha] = useState(false)

  return (
    <div>
      {!isDashboard && <NavBar />}
      <div className="min-h-[calc(100vh-60px)] relative lg:min-h-[calc(100vh-140px)]">
        <Outlet />
        <Link to={"/chat"}>
          <div className="relative">
            <div
            onMouseOver={()=>setElisha(true)}
            onMouseLeave={()=>setElisha(false)}
              className={`${
                pathname === "/chat"
                  ? "hidden"
                  : "flex justify-center items-center"
              } w-16 h-16 rounded-full border-2 border-blue-700 fixed z-20 bottom-16 md:bottom-24 right-6 lg:right-14`}
            >
              <img src={aiImage} alt="" className="w-14 h-14 rounded-full" />
              <div className={`${elisha?"flex fixed bottom-[60px] duration-300 bg-blue-700 text-white py-1 px-4 rounded-lg": 'hidden'}`}>
                <p className="text-md">Ask Elisa</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default MainLayout;
