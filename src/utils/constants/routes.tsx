import {
  createBrowserRouter,
} from "react-router-dom";

import Home from '../../routes/Home';

export const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
