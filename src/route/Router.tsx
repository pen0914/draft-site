import { Route, Switch } from "react-router-dom";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { Page404 } from "../components/pages/Page404";
import { Home } from "../components/pages/Home";

export const Router = () => {
  return (
    <Switch>
      <Route
        path="/home"
        render={({ match: { url } }) => (
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
  );
};
