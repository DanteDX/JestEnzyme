import React from "react";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div data-test="AppHeader">
        <p data-test="AppParagraph"></p>
      </div>
    </Provider>
  );
}

export default App;
