import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Shared Navbar is here */}
      <Navbar></Navbar>
      {/* All pages will run inside Outlet */}
      <Outlet></Outlet>
      {/* Shared Footer is here */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
