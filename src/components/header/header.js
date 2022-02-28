import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../photos/Logo.svg';
import './header.css';

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='menu'>
                    <li>
                        <NavLink to={'/home'} > <img src={Logo} alt='logo' /></NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}> Մեր Մասին </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/course'}> Դասընթացներ  <sup style={{ color: 'red' }}>new</sup> </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/contact'}> Հետադարձ Կապ </NavLink>
                    </li>
                    <li className='nav-button'>
                        <NavLink to={'/apply'}> Գրանցում </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;