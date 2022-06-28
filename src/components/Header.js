import React from "react";

// react router
import { Link, useLocation } from "react-router-dom";

// routes
import Routes from "../Routes";

export default function Header() {
  const location = useLocation();
  return (
    <header className="header">
      <nav className="navbar">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
          alt="Logo de Kasa"
          className="navbar-logo"
        />
        <ul className="navbar-menu">
          <li className="navbar-menu-item">
            <Link data-active={``} to="/" className="navbar-menu-item-link active">
              Accueil
            </Link>
            <Link data-active="false" to="/a-propos" className="navbar-menu-item-link">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
      {location.pathname === Routes.Home ? (
        <div className="header-banner">
          <div className="header-banner-title">
            Chez vous, partout et ailleurs
          </div>
        </div>
      ) : null}
    </header>
  );
}
