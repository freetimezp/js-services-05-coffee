import React from 'react';
import "./about.css";

import aboutImg from '../../assets/about-img.jpg';
import {FiCheck} from 'react-icons/fi';

const About = () => {
    return (
        <section className='about section' id='about'>
            <div className="about__grid container grid">
                <div className="about__img-wrapper">
                    <img src={aboutImg} alt="about" className="about__img" />
                </div>
                
                <div className="about__content">
                    <h2 className="section__title title-left" data-title="About Us">
                        Fresh Quality And Organic Tasty Coffee House For You
                    </h2>
                    <p className="about__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Possimus accusantium dicta itaque, tenetur assumenda iure 
                        nulla deleniti id. Dolor, illum deleniti. Impedit d veniam.
                    </p>

                    <div className="about__details grid">
                        <p className="about__details-description">
                            <FiCheck className="about__details-icon" />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="about__details-description">
                            <FiCheck className="about__details-icon" />
                            Ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className="about__details-description">
                            <FiCheck className="about__details-icon" />
                            Dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    <a href="#team" className="btn">Our Experts</a>
                </div>
            </div>
        </section>
    );
}

export default About;
