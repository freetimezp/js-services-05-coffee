import React, { useEffect, useState } from 'react';
import "./header.css";

import logo from '../../../src/assets/logo.png';
import { links } from '../../Data';
 
import { FaBuffer } from "react-icons/fa";

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);

    const changeHeader = () => {
        if(window.scrollY >= 80) {
            setScrollHeader(true);
        }else{
            setScrollHeader(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
    }, []);

    return (
        <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
            <nav className="nav container">
                <a href="/" className="nav__logo">
                    <img src={logo} alt="logo" className="nav__logo-img" />
                </a>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {links.map(({name, path}, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <a href={path} className="nav__link">{name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                <div className="nav__toggle">
                    <FaBuffer />
                </div>
            </nav>
        </header>
    );
}

export default Header;
