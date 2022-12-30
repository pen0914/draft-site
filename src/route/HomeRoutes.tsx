import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  { path: "/", exact: "true", children: <Home /> },

  {
    path: "/cart",
    exact: "false",
    children: <Cart />
  },
  {
    path: "*",
    exact: "false",
    children: <Page404 />
  }
];
