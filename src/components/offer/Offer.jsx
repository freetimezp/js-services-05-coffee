import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import { offer } from "../../Data";

import "./offer.css";

const Offer = () => {
    return (
        <section className='offer section' id='offer'>
            <h2 className="section__title" data-title="Offer">
                Special Offer For You
            </h2>

            <Swiper className="container" pagination={{clickable: true}} modules={[Pagination]} spaceBetween={30}>
                {offer.map(({img, title, discount, description}, index) => {
                    return (
                        <SwiperSlide key={index} className="offer__item">
                            <div className="offer__img-wrapper">
                                <img src={img} alt="offer" className="offer__img" />
                            </div>

                            <div className="offer__content">
                                <h3 className="offer__title">{title}</h3>
                                <span className="offer__discount">{discount}</span>
                                <p className="offer__description">{description}</p>
                                <a href="/" className="btn">Order Now</a>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default Offer;
