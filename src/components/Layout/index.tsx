import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = () => (
  <>
    <Sidebar />
    <Outlet />
  </>
);

export default Layout;
