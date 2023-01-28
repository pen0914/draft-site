import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";
import { MatchData } from "../components/organism/MatchData";

export const HomeRoutes = [
  { path: "/", exact: "false", children: <Home /> },

  //ページ遷移方法を探す
  { path: "/select/:clickNumber", exact: "true", children: <MatchData /> },

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
