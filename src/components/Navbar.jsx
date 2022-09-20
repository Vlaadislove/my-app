import React from 'react';
import './Navbar.module.css';

const Navbar = () => {
    return <nav className='nav'>
    <div> <a className='item' href="">Profile</a> </div>
    <div> <a className='item' href="">Massages</a> </div>
    <div> <a className='item' href="">News</a> </div>
    <div> <a className='item' href="">Music</a> </div><br></br>
    <div> <a className='item' href="">Settings</a> </div>
  </nav>
}

export default Navbar