import React from 'react';
import './gallery.css';

import { gallery } from '../../Data';
import { BsPlusLg } from 'react-icons/bs';

const Gallery = () => {
    return (
        <section className='section gallery' id='gallery'>
            <h2 className="section__title" data-title="Gallery">
                Our Gallery
            </h2>

            <div className="gallery__grid container grid">
                {gallery.map(({img, title}, index) => {
                    return (
                        <div key={index} className="gallery__item">
                            <img src={img} alt="gallery" className="gallery__img" />
                            <a href="/" className="gallery__icon">
                                <BsPlusLg/>
                            </a>
                            <h3 className="gallery__title">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Gallery;
