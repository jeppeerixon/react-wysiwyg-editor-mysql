import { Outlet } from "react-router-dom";
import './layout.scss';
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
    <div>
      <header>
        <h1>J-Cloud</h1>       
      </header>      
      <Navbar />
    </div>

    <Outlet />

    </>
  )
};

export default Layout;