import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  console.log(props);

  return (
    <header className={s.header}>
      <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="" />

      <div className={s.loginBlock}>
        {props.isAuth
            ? <div>{props.login} <button onClick={props.deleteLoginThunk}>Log out</button> </div>
            : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
