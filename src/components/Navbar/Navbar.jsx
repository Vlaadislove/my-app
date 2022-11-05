import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const setActive = ({isActive}) => isActive ? s.activeLink : s.item
// const setActive =  navData => navData.isActive ? 's.activeLink' : 's.item'

const Navbar = () => {
    return <nav className={s.nav}>
    <div> <NavLink className={setActive} to="/profile">Profile</NavLink> </div>
    <div> <NavLink className={setActive} to="/dialogs">Massages</NavLink> </div>
    <div> <NavLink className={setActive} to="/users">Users</NavLink> </div>
    <div> <NavLink className={setActive} to="/news">News</NavLink> </div>
    <div> <a className={s.item} href="">Music</a> </div>
    {/* <div> <a className={s.item} href="">Settings</a> </div> */}
  </nav>
}

export default Navbar