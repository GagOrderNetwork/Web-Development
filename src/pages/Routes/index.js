import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { CreateAccount } from "../CreateAccount";
import { NotFound } from "../NotFound";
import { SignIn } from "../SignIn";
import TV from "../TV";

const routes = [
  {
    path: "/",
    exact: true,
    component: SignIn
  },
  {
    path: "/create-account",
    component: CreateAccount
  },
  {
    path: "/tv",
    component: TV
  },
  {
    // Catch-all must be last
    component: NotFound
  }
];

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map(routeData => {
            const { path } = routeData;
            return <Route key={path || "404"} {...routeData} />;
          })}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
