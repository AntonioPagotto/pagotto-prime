import React from 'react';

import logo from '../media/horizontal-logo.png';

import '../styles/App.css';

const Header = () => {
    return (

        <div class="header">
            <a href="/home">
            <img class="header-logo" src={logo} alt='poster-icon' />
            </a>
        </div>
    );
};

export default Header;