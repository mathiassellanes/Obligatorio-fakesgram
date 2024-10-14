import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Register from "../../routes/Register";

const Layout = () => {
  const logueado = localStorage.getItem('token');

  console.log(logueado);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
