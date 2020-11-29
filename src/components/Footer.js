import React from 'react';

import logo from '../media/logo.png';

import '../styles/App.css';

const Footer = () => {
    return (
        <div class="footer">
            <div class="intern-footer">
                <div>
                    <img class="footer-logo" src={logo} alt='poster-icon' />
                    Projeto fictício feito para fins de estudo.
                </div>
                <p>Feito por Antonio Pagotto</p>
                <p>https://www.linkedin.com/in/antonio-pagotto-42b6911a2/</p>
                <p>https://github.com/AntonioPagotto</p>
            </div>
        </div>
    );
}

export default Footer;