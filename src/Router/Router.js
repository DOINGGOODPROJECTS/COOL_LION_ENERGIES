import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ContactPage from "../Pages/ContactPage";
import Errors from "../Pages/Errors";
import Home from "../Pages/Home";
import Products from "../Pages/Products/Products";
import Reseaux from "../Pages/Reseaux";
import Routes from "./Routes";
import TariffBrochure from "../Assets/Plaquette-tarifs-cool-lion.pdf";

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
        path: Routes.EmergencyRouteLink,
        element: <Products path="emergency" />,
      },
      {
        path: Routes.ClimRouteLink,
        element: <Products path="clim" />,
      },
      {
        path: Routes.ShedsRouteLink,
        element: <Products path="sheds" />,
      },
      {
        path: Routes.BuildingsRouteLink,
        element: <Products path="buildings" />,
      },
      {
        path: Routes.SupportRouteLink,
        element: <Products path={"support"} />,
      },
      {
        path: Routes.ContactRouteLink,
        element: <ContactPage />,
      },
      {
        path: Routes.NewsRouteLink,
        element: <Reseaux />,
      },
      {
        path: Routes.TariffBrochure,
        element: TariffBrochure,
      },
    ],
  },
]);

export default Router;
