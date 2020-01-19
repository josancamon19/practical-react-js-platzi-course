import React from "react";
import './styles/carousel.css'

const Carousel = ({children}) => (
    <section className="carousel">
        <div className="carousel__container">
            {children}
        </div>
    </section>
);

export default Carousel;