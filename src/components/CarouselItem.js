import React from "react";
import playIcon from '../images/play-icon.png'
import plusIcon from '../images/plus-icon.png'
import './styles/carousel-item.css'
import PropTypes from 'prop-types'

const CarouselItem = ({cover, title, year, contentRating, duration}) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/>
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/>
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};


export default CarouselItem;