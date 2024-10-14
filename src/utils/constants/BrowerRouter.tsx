import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../../routes/Home';
import Layout from "../../components/Layout";
import Notifications from "../../routes/Notifications";
import Profile from "../../routes/Profile";
import Login from "../../routes/Login";
import Register from "../../routes/Register";
import PublicRoute from "../../components/PublicRoutes";
import { routes } from "./routes";

const { base, auth } = routes

export const BrowserRouter = createBrowserRouter([
  {
    path: base.home.routeToMap,
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <Notifications />,
        path: base.notifications.routeToMap
      },
      {
        element: <Profile />,
        path: base.profile.routeToMap
      },
      {
        element: <div>Create</div>,
        path: base.create.routeToMap
      }
    ]
  },
  {
    path: auth.routeToMap,
    element: <PublicRoute />,
    children: [
      {
        element: <Login />,
        path: auth.login.routeToMap
      },
      {
        element: <Register />,
        path: auth.register.routeToMap
      }
    ]
  }
]);
