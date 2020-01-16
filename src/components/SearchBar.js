import React from "react";
import './styles/searchbar.css'

class SearchBar extends React.Component {
    render() {
        return (
            <section className="main">
                <h2 className="main__title">¿Qué quieres ver hoy?</h2>
                <input type="text" className="input" placeholder="Buscar..."/>
            </section>
        );
    }
}

export default SearchBar;