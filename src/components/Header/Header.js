import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/' >Home</NavLink>
            <NavLink to='/order' >Order</NavLink>
            <NavLink to='/grandpa' >Grandpa</NavLink>
            <NavLink to='/about' >About</NavLink>
        </nav>
    );
};

export default Header;