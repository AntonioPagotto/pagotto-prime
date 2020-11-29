import React from 'react';

import logo from '../media/horizontal-logo.png';


import '../styles/App.css';

const Header = () => {
    return (
        <div class="header">
            <img class="header-logo" src={logo} alt='poster-icon' />
        </div>
    );
}

export default Header;