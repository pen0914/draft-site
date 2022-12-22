import { Home } from "../components/pages/Home";
import { ItemDetail } from "../components/pages/ItemDetail";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";

export const HomeRoutes = [
  { path: "/", exact: "true", children: <Home /> },
  {
    path: "/item_detail",
    exact: "false",
    children: <ItemDetail />
  },
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
