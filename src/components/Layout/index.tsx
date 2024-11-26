import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import './styles.scss';

const Layout = () => (
  <>
    <Sidebar />
    <div className="content">
      <Outlet />
    </div>
  </>
);

export default Layout;
