import React from "react";
import CarouselItem from "./CarouselItem";
import './styles/carousel.css'

class Carousel extends React.Component {
    render() {
        return (
            <section className="carousel">
                <div className="carousel__container">
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
            </section>
        );
    }

}

export default Carousel;