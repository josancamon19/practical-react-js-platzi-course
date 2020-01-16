import React from "react";
import Header from "../components/Header";
import './global.css'
import SearchBar from "../components/SearchBar";
import CarouselCategories from "../components/CarouselCategories";
import Footer from "../components/Footer";

const App = () => {
    // const [videos, setVideos] = React.useState([]);
    //
    // React.useEffect(() => {
    //     fetch('http://localhost:3000/initialState')
    //         .then(response => response.json())
    //         .then(data => setVideos(data));
    // }, []);
    //
    // console.log(videos);

    return (
        <div className="App">
            <Header/>
            <SearchBar/>
            <CarouselCategories/>
            <Footer/>
        </div>
    );
};
export default App;