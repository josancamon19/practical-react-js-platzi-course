import React from "react";
import logo from '../images/logo-platzi-video-BW2.png'
import userIcon from '../images/user-icon.png'
import './styles/header.css'
import {Link} from "react-router-dom";

const Header = () => (
    <header className="header">
        <Link to="/"><img className="header__img" src={logo} alt="Platzi Video"/></Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/">Cuenta</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;