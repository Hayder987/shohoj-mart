import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";



const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-[calc(100vh-145px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
