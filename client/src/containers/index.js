import React from "react";
import { Switch, Route } from "react-router-dom";
import LiveApp from "./liveApp.js";
import Welcome from "./welcome.js";
import MyAccount from "./myAccount.js";

const routes = [
  {
    path: "/",
    exact: true,
    component: Welcome
  },
  {
    path: "/live-tv",
    component: LiveApp
  },
  {
    path: "/my-account",
    component: MyAccount
  }
];

const Routes = () => {
  return (
    <Switch>
      {routes.map(routeData => {
        const { path } = routeData;
        return <Route key={path || "404"} {...routeData} />;
      })}
    </Switch>
  );
};

export default Routes;
