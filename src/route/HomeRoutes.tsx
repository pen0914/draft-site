import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";
import { DetailRoute } from "../route/DetailRoute";

export const HomeRoutes = [
  { path: "/", exact: "false", children: <Home /> },

  //ページ遷移方法を探す
  { path: "/select", exact: "true", children: <DetailRoute /> },

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
