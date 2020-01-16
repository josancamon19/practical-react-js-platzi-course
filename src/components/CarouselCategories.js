import React from "react";
import Carousel from "./Carousel";

class CarouselCategories extends React.Component {

    render() {
        return (
            <div>
                <h3 className="categories__title">Mi lista</h3>
                <Carousel/>
                <h3 className="categories__title">Tendencias</h3>
                <Carousel/>
                <h3 className="categories__title">Originales de platzi video</h3>
                <Carousel/>
            </div>

        );
    }
}

export default CarouselCategories;