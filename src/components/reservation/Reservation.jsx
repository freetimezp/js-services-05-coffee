import React from 'react';

import { FaRegBookmark } from 'react-icons/fa';
import shapeTwo from '../../assets/shape-2.png';
import shapeThree from '../../assets/shape-3.png';

import "./reservation.css";

const Reservation = () => {
    return (
        <section className='reservation container' id='reservation'>
            <h2 className="section__title" data-title='Reservation'>
                Book A Table
            </h2>

            <form className="reservation__form grid">
                <div className="form__input-div">
                    <input type="text" className="form__input" placeholder='Your Name' />
                </div>
                <div className="form__input-div">
                    <input type="email" className="form__input" placeholder='Your Email Address' />
                </div>
                <div className="form__input-div">
                    <input type="text" className="form__input" placeholder='Your Phone' />
                </div>
                <div className="form__input-div">
                    <input type="text" className="form__input" placeholder='Date Ex: DD/MM/YY' />
                </div>
                <div className="form__input-div">
                    <input type="text" className="form__input" placeholder='Time Ex: 01:25PM' />
                </div>
                <div className="form__input-div">
                    <input type="text" className="form__input" placeholder='Number of People' />
                </div>

                <div className="form__input-div form__input-textarea">
                    <textarea className="form__input" placeholder='Your Message'></textarea>
                </div>

                <button className="btn btn--flex reservation__btn">
                    <FaRegBookmark /> Book A Table
                </button>
            </form>

            <img src={shapeTwo} alt="shape" className="shape__two" />
            <img src={shapeThree} alt="shape" className="shape__three" />
        </section>
    );
}

export default Reservation;
