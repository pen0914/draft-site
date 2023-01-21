import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";
import { TrackJacket51 } from "../components/pages/itemDetail/vintage/TrackJacket51";

//import { Item } from "../item/ItemData";

export const HomeRoutes = [
  { path: "/", exact: "true", children: <Home /> },
  { path: "/Vintage/TrackJacket", exact: "false", children: <TrackJacket51 /> },

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
