import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MAIN_LAYOUTS_ROUTES } from "./routes-main";
import MainLayout from "../layouts/main";
import { MainLayoutRoute } from "../types/type";

const AppRoutes = () => {
  const getPaths = (routes: MainLayoutRoute[]) =>
    routes.map(({ path }) => path);

  const createLayoutRoutes = (
    childrenRoutes: MainLayoutRoute[],
    Layout: React.PropsWithChildren<any>,
    isExact: boolean
  ) => (
    <Route exact={isExact} path={getPaths(childrenRoutes)}>
      <Layout>
        <React.Suspense fallback={<div>Loading ...</div>}>
          {childrenRoutes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </React.Suspense>
      </Layout>
    </Route>
  );

  return (
    <Router>
      <Switch>
        {createLayoutRoutes(MAIN_LAYOUTS_ROUTES, MainLayout, true)}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
