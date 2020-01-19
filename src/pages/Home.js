import React from "react";
import {connect} from 'react-redux';
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import './styles/home.css'
import useInitialState from "../hooks/useInitialState";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

const API = 'http://localhost:3001/initialState';
// json-server --watch json --port 3001

const Home = ({myList, trends, originals}) => {
    // const initialState = useInitialState(API);

    return (
        <>
            <SearchBar/>
            {myList.length > 0 &&
            <Category title="Mi Lista">
                <Carousel>
                    {myList.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Category>}
            <Category title="Tendencias">
                <Carousel>
                    {trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Category>
            <Category title="Originales de Platzi Video">
                <Carousel>
                    {originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Category>
        </>
    );
};
const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
};
// export default Home;
export default connect(mapStateToProps, null)(Home);