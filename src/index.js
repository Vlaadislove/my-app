import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Reduxe/state";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        // addPost={store.addPost.bind(store)}
        // onPostChange={store.onPostChange.bind(store)}
      />
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
