import React from 'react';
import { MdShoppingCart as ShoppingCart } from 'react-icons/md';
import { RiMenu2Fill as MenuIcon } from 'react-icons/ri';
import { MdSearch as SearchIcon } from 'react-icons/md';

import Logo from '../Logo';
import './style.css';


const Menu = () => {
    return(
        <menu className="menu">
            <div className="menu__icon-wrapper">
                <MenuIcon size={24} color="#FAFAFA" />
            </div>

            <div className="menu__logo-wrapper">
                <Logo />
            </div>

            <nav className="menu__link-wrapper">
                <a href="#">Home</a>
                <a href="#">Explorer</a>
            </nav>

            <div className="menu__menu-group">
            <div className="menu__icon-wrapper">
                <SearchIcon size={24} color="#FAFAFA"/>
            </div>

            <div className="menu__icon-wrapper">
                <ShoppingCart size={24} color="#FAFAFA"/>
            </div>
            </div>
        </menu>
    );
}

export default Menu;