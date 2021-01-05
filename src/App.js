import React from "react";
// import { Provider } from "react-redux";
// import store from "./store";
import Sample from "./Sample";
import DemoButton from "./DemoButton";
function App() {
  function sample(){
    console.log("sample");
  }
  // helo helo
  return (
    // <Provider store={store}>
      <div data-test="AppHeader">
        <p data-test="AppParagraph"> working</p>
        <Sample />
        <DemoButton demoFunc={sample}/>
      </div>
    // </Provider>
  );
}

export default App;
