import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//리덕스
import store from "./Reducer/store";
import { Provider } from "react-redux";

// import ReactPlayer from "react-player";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <ReactPlayer
        url={"https://youtu.be/UxpjpxLi-Qg"}
        width="100vw"
        height="20vh"
        loop={true}
        playing={true}
        muted={true}
        controls={false}
        style={{ pointerEvents: "none" }}
      /> */}
      <App />
    </Provider>
  </BrowserRouter>
);
