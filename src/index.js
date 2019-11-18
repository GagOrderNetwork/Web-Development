import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages/Routes";
import TV from "./pages/TV";
import { createStore } from "redux";
import { Provider } from "react-redux";
import _ from "lodash";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

const initialState = {
  channelName: "GeauxInfo",
  channelNumber: 411,
  videoId: "4mD8MGU4pfw?"
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "CHANGE_VIDEO":
      return {
        channelName: action.channelName,
        channelNumber: action.channelNumber,
        videoId: action.videoId
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.body.appendChild(component()));

function component() {
  const element = document.createElement("div");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(<App />, " ");

  return element;
}
