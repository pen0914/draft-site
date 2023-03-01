import React from "react";
import { Route, Switch } from "react-router-dom";
import { Open } from "../components/pages/Open";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
  return (
    <>
      <Switch>
        <Route
          path="/"
          render={({ match: { url } }) => (
            //HomeRoutesコンポーネントの配列から一致するページ遷移
            <Switch>
              {HomeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
