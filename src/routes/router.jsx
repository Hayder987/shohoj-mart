import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HelpSupport from "../pages/HelpSupport";
import Contact from "../pages/Contact";
import Collection from "../pages/Collection";
import Offers from "../pages/Offers";
import WishList from "../pages/WishList";
import UserProfile from "../pages/UserProfile";
import DashBoard from "../pages/DashBoard";
import PrivateRoute from "../private/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/help", element: <HelpSupport /> },
      { path: "/contact", element: <Contact /> },
      { path: "/collection", element: <Collection/> },
      { path: "/offers", element: <Offers/> },
      { path: "/cart", element: <Offers/> },
      { path: "/wishlist", element: <PrivateRoute><WishList/></PrivateRoute> },
      { path: "/userProfile", element: <PrivateRoute><UserProfile/></PrivateRoute> },
      { path: "dashboard", element: <PrivateRoute><DashBoard/> </PrivateRoute>},
    ],
  },
]);
