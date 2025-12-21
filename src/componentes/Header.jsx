import React from "react"; 
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/img/logo.png" className="logo-img" alt="Logo" />
            </div>
            
            <nav className="nav">
                <ul className="nav-list">
                    <li><Link to="/" className="menu-item">Inicio</Link></li>
                    <li><Link to="/nosotros" className="menu-item">Nosotros</Link></li>
                    <li><Link to="/servicios" className="menu-item">Servicios</Link></li>
                    <li><Link to="/blog" className="menu-item">Blog</Link></li>
                    <li><Link to="/preguntas" className="menu-item">Preguntas frecuentes</Link></li>
                </ul>
            </nav>

            <Link to="/contactanos" className="contact-btn">
              Contáctanos
            </Link>
        </header>
    );
}

export default Header;