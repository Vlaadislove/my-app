import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
    <div> <NavLink className={s.item} to="/profile">Profile</NavLink> </div>
    <div> <NavLink className={s.item} to="/dialogs">Massages</NavLink> </div>
    <div> <a className={s.item} href="">News</a> </div>
    <div> <a className={s.item} href="">Music</a> </div><br></br>
    <div> <a className={s.item} href="">Settings</a> </div>
  </nav>
}

export default Navbar