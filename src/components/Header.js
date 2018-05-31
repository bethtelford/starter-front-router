import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';
import logo from './../assets/checkmark_blue.svg';

let Header = props => {
    return (
        <div className='Header'>
            <img src={logo} alt='logo' />
            <NavLink to='/' exact activeClassName='active'>Todo List</NavLink>
            <NavLink to='/add' activeClassName='active'>Add New</NavLink>
        </div>
    )
}

export default Header;