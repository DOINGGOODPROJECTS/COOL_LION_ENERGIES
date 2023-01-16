import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About";
import Errors from "../Pages/Errors";
import Routes from "./Routes";

const Router = createBrowserRouter([
  {
    path: Routes.HomeRouteLink,
    element: <App />,
    errorElement: <Errors />,
    children: [
      {
        path: Routes.AboutRouteLink,
        element:<About/>
      },
    ],
  },
]);

export default Router;
