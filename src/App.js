import React from "react";
// import { Provider } from "react-redux";
// import store from "./store";
import Sample from "./Sample";
function App() {
  return (
    // <Provider store={store}>
      <div data-test="AppHeader">
        <p data-test="AppParagraph"> working</p>
        <Sample />
      </div>
    // </Provider>
  );
}

export default App;
