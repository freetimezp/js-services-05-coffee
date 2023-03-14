import React from 'react';
import "./choose.css";

import chooseImg from "../../assets/choose.jpg";
import coffeeMug from "../../assets/coffee-mug.svg";
import coffeeBeans2 from "../../assets/coffee-beans-2.svg";
import coffeeBeans3 from "../../assets/coffee-beans-3.svg";

const Choose = () => {
    return (
        <section className='choose section'>
            <div className="choose__grid container grid">
                <div className="choose__content">
                    <h2 className="section__title title-left" data-title='Why Choose Us'>
                        Coffero Most Out Of Your Favourite & Tasty Coffee House
                    </h2>
                    <p className="choose__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste 
                        deserunt sequi odio soluta aut alias labore, tenetur adipisci a 
                        ducimus? Consectetur delectus facilis reprehenderit necessitatibus.
                    </p>

                    <div className="choose__details grid">
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeMug} alt="choose" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Awesome Aroma</h3>
                                <p className="choose__details-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Obcaecati atque placeat natus hic excepturi ipsa fuga reiciendis 
                                    rerum totam dicta.
                                </p>
                            </div>
                        </div>
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans2} alt="choose" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Pure Grades</h3>
                                <p className="choose__details-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Obcaecati atque placeat natus hic excepturi ipsa fuga reiciendis 
                                    rerum totam dicta.
                                </p>
                            </div>
                        </div>
                        <div className="choose__details-item">
                            <div className="choose__details-img-wrapper">
                                <img src={coffeeBeans3} alt="choose" className="choose__details-img" />
                            </div>

                            <div>
                                <h3 className="choose__details-title">Healthy Coffee</h3>
                                <p className="choose__details-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Obcaecati atque placeat natus hic excepturi ipsa fuga reiciendis 
                                    rerum totam dicta.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={chooseImg} alt="choose" className="choose__img" />
            </div>
        </section>
    );
}

export default Choose;
