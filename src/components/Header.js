import React from "react";

// react router
import { Link, useLocation } from "react-router-dom";

// routes
import Routes from "../Routes";

export default function Header() {
  const currentLocation = useLocation();
  return (
    <header className="header">
      <nav className="navbar">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo_red.png`}
          alt="Logo de Kasa"
          className="navbar-logo"
        />
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link to="/" className="navbar-menu-item-link">
              Accueil
            </Link>
            <Link to="/a-propos" className="navbar-menu-item-link">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
      {currentLocation.pathname == Routes.Home ? (
        <div className="header-banner">
          <div className="header-banner-title">
            Chez vous, partout et ailleurs
          </div>
        </div>
      ) : null}
    </header>
  );
}
