import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Errors from "../Pages/Errors";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
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
        element: <Products />,
        children: [
          {
            path: Routes.EmergencyRouteLink,
            element: <Products />,
          },
          {
            path: Routes.ClimRouteLink,
            element: <Products />,
          },
          {
            path: Routes.ShedsRouteLink,
            element: <Products />,
          },
          {
            path: Routes.BuildingsRouteLink,
            element: <Products />,
          },
        ],
      },
    ],
  },
]);

export default Router;
