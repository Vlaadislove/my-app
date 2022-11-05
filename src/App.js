import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer
                  // state={props.state.dialogPage}
                  // dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  // profilePage={props.state.profilePage}
                  // dispatch={props.dispatch}
                  // addPost={props.addPost}
                  // onPostChange={props.onPostChange}
                />
              }
            />
            <Route path="/news" element={<News />} />
              <Route path ='users' element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
