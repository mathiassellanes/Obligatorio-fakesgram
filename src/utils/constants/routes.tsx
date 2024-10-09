import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../../routes/Home';
import Layout from "../../components/Layout";
import Notifications from "../../routes/Notifications";
import Profile from "../../routes/Profile";
import Register from "../../routes/Register";

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        element: <Notifications />,
        path: "notifications"
      },
      {
        element: <Profile />,
        path: "profile"
      },
      {
        element: <div>Create</div>,
        path: "create"
      }
    ]
  },
  {
    element: <Register />,
    path: "register",
  },
]);
