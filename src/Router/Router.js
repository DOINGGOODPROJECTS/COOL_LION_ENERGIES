import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Errors from "../Pages/Errors";
import Home from "../Pages/Home";
import Routes from "./Routes";

const Router = createBrowserRouter([
  {
    path: Routes.StartRouteLink,
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: Routes.HomeRouteLink,
        element: <Home />,
      },
      {
        path: Routes.AboutRouteLink,
        element: <Home />,
      },
      {
        path: Routes.ProductRouteLink,
        element: <About />,
      },
    ],
  },
]);

export default Router;
