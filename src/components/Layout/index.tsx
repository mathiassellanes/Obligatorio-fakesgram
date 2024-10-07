import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = () => {

  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
