import React, {useState} from 'react';
import './headerMobile.css';
import Logo from "../../photos/Logo.svg";
import {NavLink} from "react-router-dom";

const HeaderMobile = ()=> {
    const [menu, setMenu] = useState(false);
    const getMenu = ()=> {
        setMenu(!menu)
    }
    return(
        <header className='hed-mob'>
            <nav className='nav-mob'>
              <div className='mob-flex'>
                  <div className='logo-mob'>
                      <img src = { Logo } alt= 'logo'/>
                  </div>
                  <div className='burg-mob' onClick={getMenu}>
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
              </div>
                <ul className={`${menu ? 'list-mob' : 'list-none'}`}>
                    <li>
                        <NavLink to={ '/home' }> Մեր Մասին </NavLink>
                    </li>
                    <li>
                        <NavLink to={ '/course' }> Դասընթացներ </NavLink>
                    </li>
                    <li>
                        <NavLink to={ '/contact' }> Հետադարձ Կապ </NavLink>
                    </li>
                    <li className='nav-button'>
                        <NavLink to={ '/apply' }> Գրանցում </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderMobile