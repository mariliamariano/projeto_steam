import React from 'react';

import logo from '../../assets/Logo.svg'
import './style.css';

const Logo = () => {
    return(
        <div className='logo-container'>
            <img src={logo}/>
        </div>
    );

}

export default Logo;