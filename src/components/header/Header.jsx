import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

import logo from '../../../src/assets/logo.png';
import { links } from '../../Data';
 
import { FaBuffer } from "react-icons/fa";

import "./header.css";

const Header = () => {
    const [scrollHeader, setScrollHeader] = useState(false);

    const changeHeader = () => {
        if(window.scrollY >= 80) {
            setScrollHeader(true);
        }else{
            setScrollHeader(false);
        }
    };

    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader);
    }, []);

    return (
        <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
            <nav className="nav container">
                <Link to="/" onClick={scrollTop} className="nav__logo">
                    <img src={logo} alt="logo" className="nav__logo-img" />
                </Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        {links.map(({name, path}, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <Link 
                                        to={path} 
                                        className="nav__link"
                                        spy={true}
                                        hashSpy={true}
                                        smooth={true}
                                        offset={-60}
                                        duration={500}
                                    >
                                        {name}
                                    </Link>
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
