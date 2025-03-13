import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
