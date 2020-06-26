import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { init } from "../../store";
import Routes from "../../pages/Routes";

class Root extends React.Component {
  render() {
    const store = init(this.props.reducers);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
