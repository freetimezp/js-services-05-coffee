import React from 'react';
import "./home.css";

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="container home__container">
                <div className="home__content">
                    <span className="home__subtitle">Welcome To Coffero!</span>
                    <h1 className="home__title">
                        Discover Amazing Coffee House & Get Energy
                    </h1>
                    <p className="home__description">
                        There are many variations of passages available but the majority
                        have suffered alteration in some form by injected humour or randomised 
                        words.
                    </p>

                    <div className="home__btns">
                        <a href="#menu" className="btn">Check menu</a>
                        <a href="#reservation" className="btn home__btn">Book Table</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
