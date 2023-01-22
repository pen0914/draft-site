import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";
import { SelectItem } from "../components/pages/itemDetail/vintage/SelectItem";

//import { Item } from "../item/ItemData";

export const HomeRoutes = [
  { path: "/", exact: "true", children: <Home /> },
  { path: "/${id}", exact: "false", children: <SelectItem /> },

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
