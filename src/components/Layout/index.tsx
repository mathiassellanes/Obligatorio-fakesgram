import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Register from "../../routes/Register";

const Layout = () => {
  const logueado = false;
  if (logueado) {
    return (
      <div>
        <Sidebar/>
        <Outlet/>
      </div>
    );
  } else {
    return (
      <Register/>
    );
  }
};

export default Layout;
