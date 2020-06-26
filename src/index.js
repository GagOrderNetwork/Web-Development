import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root";
import _ from "lodash";
import * as reducers from "./reducers";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const App = () => <Root reducers={reducers} />;

ReactDOM.render(<App />, document.body.appendChild(component()));

function component() {
  const element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(<App />, " ");

  return element;
}
