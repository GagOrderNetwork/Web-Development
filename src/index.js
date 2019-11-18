import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages/Routes";
import TV from "./pages/TV";
import { createStore } from "redux";
import { Provider } from "react-redux";

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

ReactDOM.render(<App />, document.getElementById("root"));
