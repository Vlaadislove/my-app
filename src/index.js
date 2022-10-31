import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Reduxe/redux-store";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(
      <Provider store={store}>
    <React.StrictMode>
      <App
        // state={state}
        // dispatch={store.dispatch.bind(store)}
        // store={store}
        // addPost={store.addPost.bind(store)}
        // onPostChange={store.onPostChange.bind(store)}
      />
    </React.StrictMode>
          </Provider>
  );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
