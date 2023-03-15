import React from 'react';

import chef1 from "../../assets/team-1.jpg";
import chef2 from "../../assets/team-2.jpg";
import chef3 from "../../assets/team-3.jpg";
import chef4 from "../../assets/team-4.jpg";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import "./team.css";

const Team = () => {
    return (
        <section className='section team' id='team'>
            <h2 className="section__title" data-title="Chefs">
                Meet Our Experts
            </h2>

            <div className="team__grid grid container">
                <div className="team__item">
                    <img src={chef1} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Malissa Fie</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="team__item">
                    <img src={chef2} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Tony Pinto</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="team__item">
                    <img src={chef3} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Arrob Bodri</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <div className="team__item">
                    <img src={chef4} alt="team" className="team__img" />

                    <div className="team__data">
                        <h3 className="team__title">Janny Ostin</h3>
                        <p className="team__job">Senior Chef</p>
                    </div>

                    <div className="team__socials">
                        <a href="/" className="team__social-link">
                            <FaFacebookF />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaTwitter />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaInstagram />
                        </a>
                        <a href="/" className="team__social-link">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
