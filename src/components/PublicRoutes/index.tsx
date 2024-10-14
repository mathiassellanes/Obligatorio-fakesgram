import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../../utils/constants/routes";

const PublicRoute = () => {
  const isAuthenticated = localStorage.getItem('token');

  return (isAuthenticated ? <Navigate to={routes.base.home.complete} /> : <Outlet />);
}

export default PublicRoute;
