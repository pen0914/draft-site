import React from "react";
import { Home } from "../components/pages/Home";
import { Cart } from "../components/pages/Cart";
import { Page404 } from "../components/pages/Page404";
import { ItemDetail } from "../components/pages/ItemDetail";

export const HomeRoutes = [
  { path: "/", exact: false, children: <Home /> },

  //ページ遷移方法を探す
  { path: "/select/:clickNumber", exact: true, children: <ItemDetail /> },

  {
    path: "/cart",
    exact: false,
    children: <Cart />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
