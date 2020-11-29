import React from 'react';


import tmdbLogo from '../media/tmdb-logo.png';
import linkedin from '../media/linkedin.svg';
import github from '../media/github.svg';
import gmail from '../media/gmail.svg';

import '../styles/App.css';

const Footer = () => {
    return (
        <div class="footer">
            <div class="d-flex justify-space-between intern-footer">
                <p class="ctn">Feito por Antonio Pagotto</p>
                <a href="https://www.themoviedb.org/">
                    <img className="tmdb-logo" src={tmdbLogo} />
                </a>
                <div class="ctn f-right">
                    <a href="https://www.linkedin.com/in/antonio-pagotto-42b6911a2/">
                        <img alt="linkedin" src={linkedin} className="footer-icon" />
                    </a>
                    <a href="https://github.com/AntonioPagotto">
                        <img alt="github" src={github} className="footer-icon" />
                    </a>
                    <a href="mailto:antoniopagotto121@gmail.com">
                        <img alt="github" src={gmail} className="footer-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;